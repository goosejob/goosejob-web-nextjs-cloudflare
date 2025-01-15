import { Pool } from "@prisma/pg-worker";
import { PrismaPg } from "@prisma/adapter-pg-worker";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  const connectionString = `${process.env.DATABASE_URL}`;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  prisma = new PrismaClient({ adapter });
} else {
  prisma = new PrismaClient();
}

export { prisma };
