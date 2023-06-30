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
const RedisQueries_1 = require("../database/RedisQueries");
const RedisClient_1 = require("../redis/RedisClient");
class UsersRepository {
    getUserByKey(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new RedisQueries_1.RedisQueries();
            const result = yield queries.getItemById(`user-${userId}`, RedisClient_1.redisClient);
            return result;
        });
    }
    create(props, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = new RedisQueries_1.RedisQueries();
            const result = yield queries.createUser(`user-${userId}`, props, RedisClient_1.redisClient);
            if (!result)
                throw new Error("Create account cache error.");
            return result;
        });
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map