"use client";

import { Button } from "@/components/ui/button";
import { resetDatabase } from "@/modules/jobs/actions";
import { useActionState } from "react";

export function ResetButton() {
  const [message, formAction, isPending] = useActionState(
    resetDatabase,
    undefined
  );

  return (
    <div className="space-y-2">
      <form action={formAction}>
        <Button>{isPending ? "Resetting..." : "Reset Database"}</Button>
      </form>

      <p>{isPending ? "Loading..." : message}</p>
    </div>
  );
}
