import { RedisQueries } from "../database/RedisQueries";
import { Accounts, AccountsProps } from "../entities/accounts";
import { redisClient } from "../redis/RedisClient";

export interface IAccountsRepository {
    getAccountByKey(key: string): Promise<any>;
    createAccountWithUserId(props: string, key: string): Promise<any>;
}

export class AccountsRepository implements IAccountsRepository {
    async getAccountByKey(key: string): Promise<any> {
        const queries: RedisQueries = new RedisQueries();     
        const result: any = await queries.getAccountByUserId(key, redisClient);

        return result;
    }

    async createAccountWithUserId(props: string, key: string): Promise<any> {
        const queries: RedisQueries = new RedisQueries();     
        const result: any = await queries.createUser(key, props, redisClient);
        if(!result) throw new Error("Create account cache error.");

        return result;
    }
}