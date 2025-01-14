"use server";

import slugify from "slugify";

import { dataJobs } from "@/data/jobs";
import { prisma } from "@/utils/db";

export async function resetDatabase() {
  await new Promise((resolve) => {
    setTimeout(resolve, 100);
  });

  for (const job of dataJobs) {
    const jobUpsertData = {
      slug: slugify(job.title, { lower: true }),
      title: job.title,
      description: job.description,
    };

    await prisma.job.upsert({
      where: { slug: jobUpsertData.slug },
      update: jobUpsertData,
      create: jobUpsertData,
    });
  }

  return "Reset database successfully";
}

export async function deleteJob(formData: FormData) {
  console.log({ formData });
}
