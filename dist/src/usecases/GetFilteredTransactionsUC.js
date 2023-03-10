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
exports.GetFilteredTransactionsUC = void 0;
class GetFilteredTransactionsUC {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    getCashOutTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.transactionsRepository.getCashOutTransactions(userId);
            if (!result)
                throw new Error("Não existem transações de CashOut com esse ID.");
            return result;
        });
    }
    getCashInTransactions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.transactionsRepository.getCashInTransactions(userId);
            if (!result)
                throw new Error("Não existem transações de CashIn com esse ID.");
            return result;
        });
    }
    getTransactionsByDate(date, transactions) {
        const dateFormatted = new Date(date);
        const transactionsByDate = transactions.filter(transaction => transaction.createdat.toString() == dateFormatted.toString());
        if (transactionsByDate.length == 0)
            throw new Error("Não existem transações para esse dia.");
        return transactionsByDate;
    }
}
exports.GetFilteredTransactionsUC = GetFilteredTransactionsUC;
//# sourceMappingURL=GetFilteredTransactionsUC.js.map