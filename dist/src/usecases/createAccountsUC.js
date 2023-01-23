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
exports.createAccountUC = void 0;
const accounts_1 = require("../entities/accounts");
class createAccountUC {
    constructor(accountsRepository) {
        this.accountsRepository = accountsRepository;
    }
    create(props, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = new accounts_1.Accounts(Object.assign(Object.assign({}, props), { balance: 100 }), id);
            const result = yield this.accountsRepository.createAccount(account);
            if (!result)
                throw new Error("Erro ao criar conta no banco de dados");
            return result;
        });
    }
}
exports.createAccountUC = createAccountUC;
//# sourceMappingURL=createAccountsUC.js.map