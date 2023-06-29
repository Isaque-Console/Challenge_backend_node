"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisQueries = void 0;
const util_1 = require("util");
class RedisQueries {
    getAccountByUserId(key, redisClient) {
        const syncRedisGet = (0, util_1.promisify)(redisClient.get).bind(redisClient);
        return syncRedisGet(key);
    }
    createUser(key, value, redisClient) {
        const syncRedisSet = (0, util_1.promisify)(redisClient.set).bind(redisClient);
        return syncRedisSet(key, value);
    }
}
exports.RedisQueries = RedisQueries;
//# sourceMappingURL=RedisQueries.js.map