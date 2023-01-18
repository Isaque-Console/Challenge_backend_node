"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRepository = void 0;
const queries_1 = require("../database/queries");
const postgresqlClient_1 = require("../prisma/postgresqlClient");
class TransactionsRepository {
    getTransactionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getItemById(id, postgresqlClient_1.postgresqlClient.transactions);
        });
    }
    createTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            const result = yield queries.createItem(transaction, postgresqlClient_1.postgresqlClient.transactions);
            if (!result)
                throw new Error("Erro ao gravar a transação no banco de dados");
            return result;
        });
    }
    getTransactionsByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getTransactionsByUserId(userId, postgresqlClient_1.postgresqlClient.transactions);
        });
    }
    getCashOutTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getCashOutTransactions(userId, postgresqlClient_1.postgresqlClient.transactions);
        });
    }
    getCashInTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getCashInTransactions(userId, postgresqlClient_1.postgresqlClient.transactions);
        });
    }
}
exports.TransactionsRepository = TransactionsRepository;
