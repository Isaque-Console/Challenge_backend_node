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
exports.GetUserController = void 0;
const GetUserUC_1 = require("../usecases/GetUserUC");
const usersRepository_1 = require("../repositories/usersRepository");
const GetUserCacheUC_1 = require("../usecases/GetUserCacheUC");
const UsersRepository_1 = require("../redisRepositories/UsersRepository");
class GetUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = request.params;
                // using redis
                console.time();
                const usersRedisRepository = new UsersRepository_1.UsersRepository();
                const getUserCacheUC = new GetUserCacheUC_1.GetUserCacheUC(usersRedisRepository);
                const userCache = yield getUserCacheUC.getUserById(userId);
                console.timeEnd();
                if (userCache)
                    return response.status(200).json(userCache);
                console.log("There is nothing in cache, so fetching datas from postgres.");
                // using postgres
                console.time();
                const usersPostgresRepository = new usersRepository_1.UsersRepository();
                const getUserUC = new GetUserUC_1.GetUserUC(usersPostgresRepository);
                const user = yield getUserUC.getUserById(userId);
                console.timeEnd();
                return response.status(200).json(user);
            }
            catch (error) {
                return response.status(400).json(error.message);
            }
        });
    }
}
exports.GetUserController = GetUserController;
//# sourceMappingURL=GetUserController.js.map