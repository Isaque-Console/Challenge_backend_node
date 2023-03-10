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
exports.InMemoryAccountsRepository = void 0;
const accounts_1 = require("../../src/entities/accounts");
class InMemoryAccountsRepository {
    constructor() {
        this.accountObject = { balance: 100.00 };
        this.items = [
            new accounts_1.Accounts(this.accountObject),
            new accounts_1.Accounts(this.accountObject),
            new accounts_1.Accounts(this.accountObject)
        ];
    }
    createAccount(account) {
        throw new Error("Method not implemented.");
    }
    getAccountById(accountId) {
        throw new Error("Method not implemented.");
    }
    getAccountByUserId(userId) {
        throw new Error("Method not implemented.");
    }
    updateAccount(id, props) {
        throw new Error("Method not implemented.");
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.items.find(account => account.id === id);
        });
    }
}
exports.InMemoryAccountsRepository = InMemoryAccountsRepository;
//# sourceMappingURL=in-memory-accounts-repository.js.map