"use client";

import { Button } from "@/components/ui/button";
import { deleteJob } from "@/modules/jobs/actions";
import { LoaderIcon, TrashIcon } from "lucide-react";
import { useActionState } from "react";

export function DeleteJobButton({ id }: { id: string }) {
  const [, action, isPending] = useActionState(deleteJob, id);

  return (
    <form action={action}>
      <Button variant="destructive" size="icon-sm">
        {isPending ? <LoaderIcon className="animate-spin" /> : <TrashIcon />}
      </Button>
    </form>
  );
}

// export function DeleteJobButton({ id }: { id: string }) {
//   const [, action, isPending] = useActionState(deleteJob, id);
//   return (
//     <form action={action}>
//       <Button variant="destructive" size="icon-sm">
//         {isPending ? <LoaderIcon className="animate-spin" /> : <TrashIcon />}
//       </Button>
//     </form>
//   );
// }
