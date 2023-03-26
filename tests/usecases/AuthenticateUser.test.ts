import { UsersRepository } from "../../src/mongoRepositories/UsersRepository";
import { AuthenticateUserUC } from "../../src/usecases/authenticateUserUC";

beforeAll(() => {
    jest.spyOn(AuthenticateUserUC.prototype, 'passswordMatch').mockImplementation(() => Promise.resolve(true));
    jest.spyOn(UsersRepository.prototype, 'getUserByUsername').mockImplementation(() => Promise.resolve({
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
    it("Should return user infos and token", async () => {
        // given a valid username and valid password

        // when invoke the execute method
        const useCase: AuthenticateUserUC = new AuthenticateUserUC(new UsersRepository());
        const result: any = await useCase.execute({ username: validUsername, password: validPassword });
        // then the result should be user infos
        // expect(result.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMmEyYmU5YzE0NDI0YWViYjY1ODgiLCJpYXQiOjE2Nzk3NzA2MDksImV4cCI6MTY3OTg1NzAwOSwic3ViIjoiNjQxYjJhMmJlOWMxNDQyNGFlYmI2NTg4In0.-5xO6UqFgO3jNzPqy8LNNMUDQfSZZNusmTuV6qMUrJc");
        expect(result.user).toStrictEqual({
            "_id": "641b2a2be9c14424aebb6588",
            "username": "Usuário4",
            "password": "$2b$10$qevlzwxokOTUGf8n070VS.U2pwsv.SQeGIR.j06IqVPQKQws475jK",
            "accountId": "f266b02f-2e68-4424-aed2-7023eb2dcbdc"
        })
    })
})