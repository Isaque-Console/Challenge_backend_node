import { IAccountsRepository } from "../redisRepositories/AccountsRepository";
import { IAccountsRepository as IAccountsPostgresRepository } from "../repositories/accountsRepository";
import { Accounts } from "../entities/accounts";
import { GetAccountUC } from "./GetAccountUC";

export class CreateAccountCacheUC {
    constructor(
        private accountsRepository: IAccountsRepository,
        private accountsPostgresRepository: IAccountsPostgresRepository
    ) { }

    async createAccountWithUserId(userId: string): Promise<Accounts> {
        const accountAlredyExists: any = await this.accountsRepository.getAccountByKey(`account-${userId}`);

        if(accountAlredyExists) return accountAlredyExists;

        const getAccountUC: GetAccountUC = new GetAccountUC(this.accountsPostgresRepository);
        const account: any = await getAccountUC.getAccountByUserId(userId);
        const createdAccount: Accounts = await this.accountsRepository.createAccountWithUserId(JSON.stringify({ id: account.id, balance: account.balance }), `account-${userId}`);
        if(!createdAccount) throw new Error("Create account cache error.");

        return createdAccount;
    }
}