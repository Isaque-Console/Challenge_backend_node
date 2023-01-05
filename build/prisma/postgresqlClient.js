"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresqlClient = void 0;
const client_1 = require("@prisma/client");
const postgresqlClient = new client_1.PrismaClient();
exports.postgresqlClient = postgresqlClient;
