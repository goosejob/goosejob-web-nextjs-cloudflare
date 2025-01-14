import { PrismaClient } from "@prisma/client";
import { dataJobs } from "../src/data/jobs";
import slugify from "slugify";

const prisma = new PrismaClient();

async function main() {
  for (const job of dataJobs) {
    const jobUpsertData = {
      slug: slugify(job.title, { lower: true }),
      title: job.title,
      description: job.description,
    };

    const upsertedJob = await prisma.job.upsert({
      where: { slug: jobUpsertData.slug },
      update: jobUpsertData,
      create: jobUpsertData,
    });

    console.log(`💼 Job: ${upsertedJob.title} (${upsertedJob.slug})`);
  }
}

main()
  .then(() => {
    console.log("✅ Seeding complete");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
