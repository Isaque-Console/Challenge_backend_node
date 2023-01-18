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
exports.UpdateAccountUC = void 0;
const GetAccountUC_1 = require("./GetAccountUC");
class UpdateAccountUC {
    constructor(accountsRepository) {
        this.accountsRepository = accountsRepository;
    }
    updateBalance(currencyBalance, transferAmount) {
        const updatedBalance = currencyBalance - transferAmount;
        if (updatedBalance < 0)
            throw new Error("Não existe saldo suficiente na conta de origem.");
        return updatedBalance;
    }
    updateAccountBalance(id, transferAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUseCase = new GetAccountUC_1.GetAccountUC(this.accountsRepository);
            const account = yield getUseCase.getAccount(id);
            const updatedBalance = {
                balance: this.updateBalance(account.balance, transferAmount)
            };
            const result = yield this.accountsRepository.updateAccount(id, updatedBalance);
            return result;
        });
    }
    execute(payerAccountId, payeeAccountId, transferAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateAccountBalance(payerAccountId, transferAmount);
            yield this.updateAccountBalance(payeeAccountId, -transferAmount);
            return "Transação feita com sucesso.";
        });
    }
}
exports.UpdateAccountUC = UpdateAccountUC;
