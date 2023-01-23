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
exports.GetBalanceController = void 0;
const accountsRepository_1 = require("../repositories/accountsRepository");
const GetAccountUC_1 = require("../usecases/GetAccountUC");
class GetBalanceController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            const repository = new accountsRepository_1.AccountsRepository();
            const useCase = new GetAccountUC_1.GetAccountUC(repository);
            const result = yield useCase.getAccountByUserId(userId);
            return response.json(result);
        });
    }
}
exports.GetBalanceController = GetBalanceController;
//# sourceMappingURL=GetBalanceController.js.map