import { Queries } from '../database/queries';
import { Accounts } from '../entities/accounts';
import { postgresqlClient } from '../prisma/postgresqlClient';


export interface IAccountsRepository {
    createAccount(account: Accounts): Promise<Accounts | undefined>;
}

export class AccountsRepository implements IAccountsRepository {
    async createAccount(account: Accounts): Promise<Accounts | undefined> {
        const queries: Queries = new Queries();
        return await queries.createItem(account, postgresqlClient.accounts);
    }
}
