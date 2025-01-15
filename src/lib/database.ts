import { Pool } from "@prisma/pg-worker";
import { PrismaPg } from "@prisma/adapter-pg-worker";
import { PrismaClient } from "@prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
