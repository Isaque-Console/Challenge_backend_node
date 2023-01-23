import { Queries } from '../database/queries';
import { Accounts, AccountsProps } from '../entities/accounts';
import { postgresqlClient } from '../prisma/postgresqlClient';


export interface IAccountsRepository {
    createAccount(account: Accounts): Promise<Accounts | undefined>;
    getAccountById(accountId: string): Promise<Accounts | undefined>;
    getAccountByUserId(userId: string): Promise<any | undefined>;
    updateAccount(id: string, props: AccountsProps): Promise<any>;
}

export class AccountsRepository implements IAccountsRepository {
    async createAccount(account: Accounts): Promise<Accounts | undefined> {
        const queries: Queries = new Queries();
        return await queries.createItem(account, postgresqlClient.accounts);
    }

    async getAccountById(accountId: string): Promise<Accounts | undefined> {
        const queries: Queries = new Queries();
        return await queries.getItemById(accountId, postgresqlClient.accounts);
    }

    async getAccountByUserId(userId: string): Promise<any | undefined> {
        const queries: Queries = new Queries();
        return await queries.getAccountByUserId(userId,  postgresqlClient.users, postgresqlClient.accounts);
    }

    async updateAccount(id: string, props: AccountsProps): Promise<any> {
        const queries: Queries = new Queries();
        return await queries.updateItemById(id, props, postgresqlClient.accounts);
    }
}
