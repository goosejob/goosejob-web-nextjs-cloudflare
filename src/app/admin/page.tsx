import { ResetDatabaseButton } from "./reset-database";

export default function Page() {
  return (
    <div className="space-y-10">
      <h1 className="text-7xl font-black">Admin</h1>

      <div>
        <ResetDatabaseButton />
      </div>
    </div>
  );
}
