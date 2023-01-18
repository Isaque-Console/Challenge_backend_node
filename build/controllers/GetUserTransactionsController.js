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
exports.GetUserTransactionsController = void 0;
const transactionsRepository_1 = require("../repositories/transactionsRepository");
const GetTransactionsUC_1 = require("../usecases/GetTransactionsUC");
class GetUserTransactionsController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            const repository = new transactionsRepository_1.TransactionsRepository();
            const useCase = new GetTransactionsUC_1.GetTransactionsUC(repository);
            const transactions = yield useCase.getTransactionsByUserId(userId);
            return response.json(transactions);
        });
    }
}
exports.GetUserTransactionsController = GetUserTransactionsController;
