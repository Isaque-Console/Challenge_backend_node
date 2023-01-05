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
exports.AuthenticateUserController = void 0;
const authenticateUserUC_1 = require("../usecases/authenticateUserUC");
const usersRepository_1 = require("../repositories/usersRepository");
class AuthenticateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = request.body;
            const repository = new usersRepository_1.UsersRepository();
            const useCase = new authenticateUserUC_1.AuthenticateUserUC(repository);
            const JWTToken = yield useCase.execute({ username, password });
            return response.status(200).json(JWTToken);
        });
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
