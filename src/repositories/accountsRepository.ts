import { Queries } from '../database/queries';
import { Accounts, AccountsProps } from '../entities/accounts';
import { postgresqlClient } from '../prisma/postgresqlClient';


export interface IAccountsRepository {
    createAccount(account: Accounts): Promise<Accounts | undefined>;
    getAccount(accountId: string): Promise<Accounts | undefined>;
    updateAccount(id: string, props: AccountsProps): Promise<any>;
}

export class AccountsRepository implements IAccountsRepository {
    async createAccount(account: Accounts): Promise<Accounts | undefined> {
        const queries: Queries = new Queries();
        return await queries.createItem(account, postgresqlClient.accounts);
    }

    async getAccount(accountId: string): Promise<Accounts | undefined> {
        const queries: Queries = new Queries();
        return await queries.getItemById(accountId, postgresqlClient.accounts);
    }

    async updateAccount(id: string, props: AccountsProps): Promise<any> {
        const queries: Queries = new Queries();
        return await queries.updateItemById(id, props, postgresqlClient.accounts);
    }
}
