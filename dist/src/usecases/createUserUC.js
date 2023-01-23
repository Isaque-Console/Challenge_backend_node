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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUC = void 0;
const users_1 = require("../entities/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createAccountsUC_1 = require("./createAccountsUC");
const accountsRepository_1 = require("../repositories/accountsRepository");
class CreateUserUC {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    usernameIsUnique(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return !(yield this.usersRepository.getUserByUsername(username));
        });
    }
    validUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username.length > 2) {
                if (yield this.usernameIsUnique(username))
                    return true;
                throw new Error("Nome de usuario existente.");
            }
            throw new Error("O nome de usuário deve conter pelo menos 3 caracteres.");
        });
    }
    validPassword(password) {
        // pelo menos 8 chars, um numero e uma letra maiuscula
        const pattern = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (pattern.test(password) && password.length > 7)
            return true;
        throw new Error("Senha inválida.");
    }
    passwordHash(password) {
        const salt = bcrypt_1.default.genSaltSync(10);
        const hash = bcrypt_1.default.hashSync(password, salt);
        return hash;
    }
    create(props, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.validUsername(props.username);
                this.validPassword(props.password);
            }
            catch (error) {
                throw new Error(error.message);
            }
            const hashedPassword = this.passwordHash(props.password);
            return new users_1.Users(Object.assign(Object.assign({}, props), { password: hashedPassword }), id);
        });
    }
    execute(userProps, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let createAccountUseCase;
            let account;
            let accountId;
            if (!userProps.accountId) {
                createAccountUseCase = new createAccountsUC_1.createAccountUC(new accountsRepository_1.AccountsRepository());
                account = yield createAccountUseCase.create();
                accountId = account.id;
            }
            else {
                accountId = userProps.accountId;
            }
            userProps = Object.assign(Object.assign({}, userProps), { accountId });
            const user = yield this.create(userProps, userId);
            const createdUser = yield this.usersRepository.createUser(user.props, user.id);
            return createdUser;
        });
    }
}
exports.CreateUserUC = CreateUserUC;
//# sourceMappingURL=createUserUC.js.map