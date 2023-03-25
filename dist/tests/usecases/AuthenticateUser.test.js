"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersRepository_1 = require("../../src/mongoRepositories/UsersRepository");
const authenticateUserUC_1 = require("../../src/usecases/authenticateUserUC");
jest.mock("../../src/mongoRepositories/UsersRepository", () => {
    const instance = {
        getItemByCpf: jest.fn().mockResolvedValueOnce('123409823')
            .mockResolvedValue(null)
    };
    const mockRepository = jest.fn(() => instance);
    return { CreditReportRepository: mockRepository };
});
const validUsername = "Usuário4";
const validPassword = "Senha1234";
describe("execute tests", () => {
    // given a valid username and valid password
    // when invoke the execute method
    const useCase = new authenticateUserUC_1.AuthenticateUserUC(new UsersRepository_1.UsersRepository());
    const result = useCase.execute({ username: validUsername, password: validPassword });
    // then the result should be user infos
});
//# sourceMappingURL=AuthenticateUser.test.js.map