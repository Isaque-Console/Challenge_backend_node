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
exports.InMemoryUsersRepository = void 0;
const users_1 = require("../../src/entities/users");
class InMemoryUsersRepository {
    constructor() {
        this.items = [
            new users_1.Users({
                username: "test1",
                password: "passw1",
                accountId: "account1"
            }),
            new users_1.Users({
                username: "test2",
                password: "passw2",
                accountId: "account2"
            }),
            new users_1.Users({
                username: "test3",
                password: "passw3",
                accountId: "account3"
            })
        ];
    }
    getUserById(userId) {
        throw new Error("Method not implemented.");
    }
    getUserByUsername(username) {
        throw new Error("Method not implemented.");
    }
    createUser(props, id) {
        throw new Error("Method not implemented.");
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const Users = this.items.find(user => user.props.username === username);
            if (!Users)
                return null;
            return Users;
        });
    }
}
exports.InMemoryUsersRepository = InMemoryUsersRepository;
//# sourceMappingURL=in-memory-users-repository.js.map