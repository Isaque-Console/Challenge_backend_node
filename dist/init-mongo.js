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
const UsersRepository_1 = require("./src/mongoRepositories/UsersRepository");
const initMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    const repository = new UsersRepository_1.UsersRepository();
    yield repository.createUser({
        "username": "Usuário4",
        "password": "$2b$10$qevlzwxokOTUGf8n070VS.U2pwsv.SQeGIR.j06IqVPQKQws475jK",
        "accountId": "f266b02f-2e68-4424-aed2-7023eb2dcbdc"
    }, "641b2a2be9c14424aebb6588");
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield initMongo();
}))();
//# sourceMappingURL=init-mongo.js.map