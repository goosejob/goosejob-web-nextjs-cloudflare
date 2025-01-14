import { Logo } from "@/components/shared/logo";
import { prisma } from "@/utils/db";
import { DeleteJobButton } from "@/app/home/delete-job";

export default async function Page() {
  const jobs = await prisma.job.findMany();

  return (
    <div className="flex justify-center">
      <div className="space-y-8 max-w-xl w-full">
        <Logo />

        {jobs.length <= 0 && <p>No jobs available</p>}

        <ul className="space-y-4">
          {jobs.map((job) => {
            return (
              <li key={job.id}>
                <section className="flex justify-between gap-4 border p-4 rounded">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{job.title}</h2>
                    <p className="max-w-xl">{job.description}</p>
                  </div>

                  <div>
                    <DeleteJobButton id={job.id} />
                  </div>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
