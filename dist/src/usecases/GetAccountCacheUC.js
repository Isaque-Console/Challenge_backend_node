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
exports.GetAccountCacheUC = void 0;
const GetAccountUC_1 = require("./GetAccountUC");
class GetAccountCacheUC {
    constructor(accountsRepository, accountsPostgresRepository) {
        this.accountsRepository = accountsRepository;
        this.accountsPostgresRepository = accountsPostgresRepository;
    }
    getAccountByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const accountCache = yield this.accountsRepository.getAccountByKey(`account-${userId}`);
            if (accountCache) {
                console.log("Fetching cache in redis.");
                return JSON.parse(accountCache);
            }
            const getAccountUC = new GetAccountUC_1.GetAccountUC(this.accountsPostgresRepository);
            const account = yield getAccountUC.getAccountByUserId(userId);
            if (!account)
                throw new Error("Get account error in database.");
            return account;
        });
    }
}
exports.GetAccountCacheUC = GetAccountCacheUC;
//# sourceMappingURL=GetAccountCacheUC.js.map