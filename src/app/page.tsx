import { prisma } from "@/utils/db";

export default async function Page() {
  const jobs = await prisma.job.findMany();

  return (
    <div className="space-y-8 p-10">
      <h1 className="text-2xl font-bold">Goosejob</h1>

      <ul className="space-y-4">
        {jobs.map((job) => {
          return (
            <li key={job.id}>
              <div className="border p-2 rounded">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
