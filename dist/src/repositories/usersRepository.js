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
exports.UsersRepository = void 0;
const queries_1 = require("../database/queries");
const users_1 = require("../entities/users");
const postgresqlClient_1 = require("../prisma/postgresqlClient");
class UsersRepository {
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getItemById(userId, postgresqlClient_1.postgresqlClient.users);
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new queries_1.Queries();
            return yield queries.getUserByUsername(username, postgresqlClient_1.postgresqlClient.users);
        });
    }
    createUser(props, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new users_1.Users(props, id);
            const queries = new queries_1.Queries();
            const result = yield queries.createItem(user, postgresqlClient_1.postgresqlClient.users);
            if (!result)
                throw new Error("Erro ao criar usuário no banco de dados");
            return result;
        });
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=usersRepository.js.map