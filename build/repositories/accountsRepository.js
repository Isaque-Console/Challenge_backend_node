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
exports.AccountsRepository = void 0;
const queries_1 = require("../database/queries");
const postgresqlClient_1 = require("../prisma/postgresqlClient");
class AccountsRepository {
    createAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.createItem(account, postgresqlClient_1.postgresqlClient.accounts);
        });
    }
}
exports.AccountsRepository = AccountsRepository;
