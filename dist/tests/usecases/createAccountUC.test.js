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
const createAccountsUC_1 = require("../../src/usecases/createAccountsUC");
const in_memory_accounts_repository_1 = require("../inMemory/in-memory-accounts-repository");
describe("Create Accounts entity", () => {
    it("Should return a new instace of Accounts with balance to equal 100.00", () => __awaiter(void 0, void 0, void 0, function* () {
        // given no balance
        // when the create method is invoked
        const useCase = new createAccountsUC_1.createAccountUC(new in_memory_accounts_repository_1.InMemoryAccountsRepository());
        const account = yield useCase.create({ balance: 100 });
        // then the method should return an Accounts object
        expect(account.props.balance).toBe(100);
    }));
});
//# sourceMappingURL=createAccountUC.test.js.map