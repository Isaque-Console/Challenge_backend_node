import { Redis } from 'ioredis';
import { promisify } from 'util';

export class RedisQueries {
    getAccountByUserId(key: string, redisClient: Redis): Promise<any> {
        const syncRedisGet = promisify(redisClient.get).bind(redisClient);
        return syncRedisGet(key);
    }
    
    createUser(key: string, value: string, redisClient: Redis) {
        const syncRedisSet = promisify(redisClient.set).bind(redisClient);
        return syncRedisSet(key, value);
    }
}