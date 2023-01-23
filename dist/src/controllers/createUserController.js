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
exports.CreateUserController = void 0;
const createUserUC_1 = require("../usecases/createUserUC");
const usersRepository_1 = require("../repositories/usersRepository");
class CreateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, username, password, accountId } = request.body;
            const newUserProps = { username, password, accountId };
            const repository = new usersRepository_1.UsersRepository();
            const useCase = new createUserUC_1.CreateUserUC(repository);
            const result = yield useCase.execute(newUserProps, userId);
            return response.json(result);
        });
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=createUserController.js.map