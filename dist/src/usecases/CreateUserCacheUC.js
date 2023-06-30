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
exports.CreateUserCacheUC = void 0;
const GetUserUC_1 = require("./GetUserUC");
class CreateUserCacheUC {
    constructor(accountsRedisRepository, accountsPostgresRepository) {
        this.accountsRedisRepository = accountsRedisRepository;
        this.accountsPostgresRepository = accountsPostgresRepository;
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlredyExists = yield this.accountsRedisRepository.getUserByKey(userId);
            if (userAlredyExists)
                return userAlredyExists;
            const getUserUC = new GetUserUC_1.GetUserUC(this.accountsPostgresRepository);
            const user = yield getUserUC.getUserById(userId);
            console.log(user);
            const createdUser = yield this.accountsRedisRepository.create(JSON.stringify(user), userId);
            if (!createdUser)
                throw new Error("Create user cache error.");
            return createdUser;
        });
    }
}
exports.CreateUserCacheUC = CreateUserCacheUC;
//# sourceMappingURL=CreateUserCacheUC.js.map