import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { prisma } from "@/utils/db";
import { TrashIcon } from "lucide-react";

export default async function Page() {
  const jobs = await prisma.job.findMany();

  return (
    <div className="flex justify-center">
      <div className="space-y-8">
        <Logo />

        <ul className="space-y-4 max-w-4xl">
          {jobs.map((job) => {
            return (
              <li key={job.id}>
                <section className="flex justify-between gap-4 border p-4 rounded">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{job.title}</h2>
                    <p className="max-w-xl">{job.description}</p>
                  </div>

                  <div>
                    <Button variant="destructive" size="icon-sm">
                      <TrashIcon />
                    </Button>
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
