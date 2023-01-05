import { PrismaClient } from "@prisma/client";

const postgresqlClient = new PrismaClient();

export { postgresqlClient };