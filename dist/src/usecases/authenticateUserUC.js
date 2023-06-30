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
exports.AuthenticateUserUC = void 0;
const GenerateTokenProvider_1 = require("../provider/GenerateTokenProvider");
const bcryptjs_1 = require("bcryptjs");
const CreateUserCacheUC_1 = require("./CreateUserCacheUC");
class AuthenticateUserUC {
    constructor(usersCacheRepository, usersRepository) {
        this.usersCacheRepository = usersCacheRepository;
        this.usersRepository = usersRepository;
    }
    passswordMatch(password, hashedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const match = yield (0, bcryptjs_1.compare)(password, hashedPassword);
            return match;
        });
    }
    execute({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield this.usersRepository.getUserByUsername(username);
            if (!userAlreadyExists) {
                throw new Error("Nome de usuário ou senha incorreto!");
            }
            const passswordMatch = yield this.passswordMatch(password, userAlreadyExists.password);
            if (!passswordMatch) {
                throw new Error("Nome de usuário ou senha incorreto!");
            }
            const createAccountCacheUC = new CreateUserCacheUC_1.CreateUserCacheUC(this.usersCacheRepository, this.usersRepository);
            yield createAccountCacheUC.create(userAlreadyExists._id);
            const generateTokenProvider = new GenerateTokenProvider_1.GenerateTokenProvider();
            const token = yield generateTokenProvider.execute(userAlreadyExists._id);
            return { token, user: userAlreadyExists };
        });
    }
}
exports.AuthenticateUserUC = AuthenticateUserUC;
//# sourceMappingURL=authenticateUserUC.js.map