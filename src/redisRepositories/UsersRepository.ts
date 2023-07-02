import { RedisQueries } from "../database/RedisQueries";
import { redisClient } from "../redis/RedisClient";

export interface IUsersRepository {
    getUserByKey(userId: string): Promise<any>;
    create(props: string, key: string): Promise<any>;
}

export class UsersRepository implements IUsersRepository {
    async getUserByKey(userId: string): Promise<any> {
        const queries: RedisQueries = new RedisQueries();     
        const result: any = await queries.getItemById(`user-${userId}`, redisClient);

        return result;
    }

    async create(props: string, userId: string): Promise<any> {
        const queries: RedisQueries = new RedisQueries();     
        const result: any = await queries.createUser(`user-${userId}`, props, redisClient);
        if(!result) throw new Error("Create account cache error.");

        return result;
    }
}