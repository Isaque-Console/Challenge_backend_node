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
exports.FinancialTransactionController = void 0;
const accountsRepository_1 = require("../repositories/accountsRepository");
const transactionsRepository_1 = require("../repositories/transactionsRepository");
const usersRepository_1 = require("../repositories/usersRepository");
const CreateTransactionsUC_1 = require("../usecases/CreateTransactionsUC");
const GetAccountUC_1 = require("../usecases/GetAccountUC");
const GetUserUC_1 = require("../usecases/GetUserUC");
class FinancialTransactionController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            const { payeeUsername, transferAmount } = request.body;
            const getUserUC = new GetUserUC_1.GetUserUC(new usersRepository_1.UsersRepository());
            const payeeUser = yield getUserUC.getUserByUsername(payeeUsername);
            const accountsRepository = new accountsRepository_1.AccountsRepository();
            const getAccountUC = new GetAccountUC_1.GetAccountUC(accountsRepository);
            const payerAccount = yield getAccountUC.getAccountByUserId(userId);
            const createTransactionUC = new CreateTransactionsUC_1.CreateTransactionUC(new transactionsRepository_1.TransactionsRepository());
            const newTransactionProps = {
                debitedAccountId: payerAccount.id,
                creditedAccountId: payeeUser.accountId,
                value: transferAmount,
                createdat: new Date()
            };
            const newTransaction = yield createTransactionUC.execute(newTransactionProps, accountsRepository);
            return response.json(newTransaction);
        });
    }
}
exports.FinancialTransactionController = FinancialTransactionController;
//# sourceMappingURL=FinancialTransactionController.js.map