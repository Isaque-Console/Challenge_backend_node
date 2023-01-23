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
exports.CreateTransactionUC = void 0;
const transactions_1 = require("../entities/transactions");
const UpdateAccountUC_1 = require("./UpdateAccountUC");
class CreateTransactionUC {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    create(props, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = new transactions_1.Transactions(props, id);
            const result = yield this.transactionsRepository.createTransaction(transaction);
            if (!result)
                throw new Error("Erro ao criar conta no banco de dados");
            return result;
        });
    }
    execute(props, accountsRepository, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (props.debitedAccountId === props.creditedAccountId)
                throw new Error("Não pode-se fazer uma transação para si mesmo");
            const updateAccountUC = new UpdateAccountUC_1.UpdateAccountUC(accountsRepository);
            yield updateAccountUC.execute(props.debitedAccountId, props.creditedAccountId, props.value);
            const createdTrasaction = yield this.create(props, id);
            return createdTrasaction;
        });
    }
}
exports.CreateTransactionUC = CreateTransactionUC;
//# sourceMappingURL=CreateTransactionsUC.js.map