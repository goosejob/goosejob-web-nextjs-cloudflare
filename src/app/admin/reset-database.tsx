"use client";

import { Button } from "@/components/ui/button";
import { resetDatabase } from "@/modules/jobs/actions";
import { useActionState } from "react";

export function ResetDatabaseButton() {
  const [message, action, isPending] = useActionState(resetDatabase, undefined);

  return (
    <div className="space-y-2">
      <form action={action}>
        <Button>{isPending ? "Resetting..." : "Reset Database"}</Button>
      </form>

      <p>{isPending ? "Loading..." : message}</p>
    </div>
  );
}
