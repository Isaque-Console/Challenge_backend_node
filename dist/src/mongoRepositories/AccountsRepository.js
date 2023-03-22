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
const MongoQueries_1 = require("../database/MongoQueries");
const mongoClient_1 = require("../mongoDB/mongoClient");
class AccountsRepository {
    createAccount(account) {
        throw new Error("Method not implemented.");
    }
    getAccountByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, mongoClient_1.mongoCollection)();
            const query = new MongoQueries_1.MongoQueries();
            const result = yield query.getItemById(userId, collection);
            return result;
        });
    }
    updateAccount(id, props) {
        throw new Error("Method not implemented.");
    }
    getAccountById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield (0, mongoClient_1.mongoCollection)();
            const query = new MongoQueries_1.MongoQueries();
            const result = yield query.getItemById(id, collection);
            return result;
        });
    }
}
exports.AccountsRepository = AccountsRepository;
//# sourceMappingURL=AccountsRepository.js.map