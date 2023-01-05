import { Users } from "../entities/users";

export interface IAuthenticateUserRepository {
    getUserByUsername(username: string): Promise<Users | undefined>;
}

export class AccountsRepository implements IAccountsRepository {
    async getUserByUsername(username: string): Promise<Users | undefined> {
        const queries: Queries = new Queries();
        return await queries.createItem(account, postgresqlClient.accounts);
    }
}