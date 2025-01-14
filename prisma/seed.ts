import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const upsertedJob = await prisma.job.upsert({
    where: { slug: "software-engineer" },
    update: {
      title: "Software Engineer",
    },
    create: {
      slug: "software-engineer",
      title: "Software Engineer",
    },
  });

  console.log(`💼 Job: ${upsertedJob.title}`);
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
