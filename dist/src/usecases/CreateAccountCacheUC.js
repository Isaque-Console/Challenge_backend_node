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
exports.CreateAccountCacheUC = void 0;
const GetAccountUC_1 = require("./GetAccountUC");
class CreateAccountCacheUC {
    constructor(accountsRepository, accountsPostgresRepository) {
        this.accountsRepository = accountsRepository;
        this.accountsPostgresRepository = accountsPostgresRepository;
    }
    createAccountWithUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountAlredyExists = yield this.accountsRepository.getAccountByKey(`account-${userId}`);
            if (accountAlredyExists)
                return accountAlredyExists;
            const getAccountUC = new GetAccountUC_1.GetAccountUC(this.accountsPostgresRepository);
            const account = yield getAccountUC.getAccountByUserId(userId);
            const createdAccount = yield this.accountsRepository.createAccountWithUserId(JSON.stringify({ balance: account.balance, test: "teeeest" }), `account-${userId}`);
            if (!createdAccount)
                throw new Error("Create account cache error.");
            return createdAccount;
        });
    }
}
exports.CreateAccountCacheUC = CreateAccountCacheUC;
//# sourceMappingURL=CreateAccountCacheUC.js.map