import { UsersRepository } from "./src/mongoRepositories/UsersRepository";

const initMongo = async () => {
    const repository: UsersRepository = new UsersRepository();
    await repository.createUser({
        "username": "Usuário4",
        "password": "$2b$10$qevlzwxokOTUGf8n070VS.U2pwsv.SQeGIR.j06IqVPQKQws475jK",
        "accountId": "f266b02f-2e68-4424-aed2-7023eb2dcbdc"
    }, "641b2a2be9c14424aebb6588");
}

(async () => {
    await initMongo();
})();