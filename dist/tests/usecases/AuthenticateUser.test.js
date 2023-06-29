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
const UsersRepository_1 = require("../../src/mongoRepositories/UsersRepository");
const authenticateUserUC_1 = require("../../src/usecases/authenticateUserUC");
beforeAll(() => {
    jest.spyOn(authenticateUserUC_1.AuthenticateUserUC.prototype, 'passswordMatch').mockImplementation(() => Promise.resolve(true));
    jest.spyOn(UsersRepository_1.UsersRepository.prototype, 'getUserByUsername').mockImplementation(() => Promise.resolve({
        "_id": "641b2a2be9c14424aebb6588",
        "username": "Usuário4",
        "password": "$2b$10$qevlzwxokOTUGf8n070VS.U2pwsv.SQeGIR.j06IqVPQKQws475jK",
        "accountId": "f266b02f-2e68-4424-aed2-7023eb2dcbdc"
    }));
});
afterAll(() => {
    jest.restoreAllMocks();
});
const validUsername = "Usuário4";
const validPassword = "Senha1234";
describe("execute tests", () => {
    it("Should return user infos and token", () => __awaiter(void 0, void 0, void 0, function* () {
        // given a valid username and valid password
        // when invoke the execute method
        const useCase = new authenticateUserUC_1.AuthenticateUserUC(new UsersRepository_1.UsersRepository());
        const result = yield useCase.execute({ username: validUsername, password: validPassword });
        // then the result should be user infos
        // expect(result.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMmEyYmU5YzE0NDI0YWViYjY1ODgiLCJpYXQiOjE2Nzk3NzA2MDksImV4cCI6MTY3OTg1NzAwOSwic3ViIjoiNjQxYjJhMmJlOWMxNDQyNGFlYmI2NTg4In0.-5xO6UqFgO3jNzPqy8LNNMUDQfSZZNusmTuV6qMUrJc");
        expect(result.user).toStrictEqual({
            "_id": "641b2a2be9c14424aebb6588",
            "username": "Usuário4",
            "password": "$2b$10$qevlzwxokOTUGf8n070VS.U2pwsv.SQeGIR.j06IqVPQKQws475jK",
            "accountId": "f266b02f-2e68-4424-aed2-7023eb2dcbdc"
        });
    }));
});
//# sourceMappingURL=AuthenticateUser.test.js.map