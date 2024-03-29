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
exports.GetUserUC = void 0;
class GetUserUC {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersRepository.getUserById(userId);
            if (!result)
                throw new Error("Não existe usuario com esse Id.");
            return result;
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersRepository.getUserByUsername(username);
            if (!result)
                throw new Error("Não existe usuario com esse username.");
            return result;
        });
    }
}
exports.GetUserUC = GetUserUC;
//# sourceMappingURL=GetUserUC.js.map