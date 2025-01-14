"use server";

import slugify from "slugify";

import { dataJobs } from "@/data/jobs";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";

export async function resetDatabase() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  try {
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
  } catch (error) {
    console.error(error);
    return "Failed to reset database";
  }
}

export async function deleteJob(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 200));

  try {
    await prisma.job.delete({ where: { id } });

    revalidatePath("/");

    return "Deleted";
  } catch (error) {
    console.error(error);
    return "Failed to delete item";
  }
}
