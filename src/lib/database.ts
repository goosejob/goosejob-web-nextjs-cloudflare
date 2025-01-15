import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

// To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
neonConfig.poolQueryViaFetch = true;

const connectionString = `${process.env.DATABASE_URL}`;

let prisma: PrismaClient;

if (
  process.env.NODE_ENV === "development" ||
  process.env.NEXTJS_ENV === "development"
) {
  console.log("Development");

  prisma = new PrismaClient();
} else {
  console.log("Production");

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  prisma = new PrismaClient({ adapter });
}

export { prisma };
