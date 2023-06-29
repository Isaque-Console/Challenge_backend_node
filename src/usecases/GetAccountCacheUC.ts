import { IAccountsRepository } from "../redisRepositories/AccountsRepository";

export class GetAccountCacheUC {
    constructor(
        private accountsRepository: IAccountsRepository,
    ) { }

    async getAccountByUserId(userId: string): Promise<any> {
        const accountCache = await this.accountsRepository.getAccountByKey(`account-${userId}`);
        console.log("Fetching cache in redis.");
        return JSON.parse(accountCache);

        // const getAccountUC: GetAccountUC = new GetAccountUC(this.accountsPostgresRepository);
        // const account = await getAccountUC.getAccountByUserId(userId);
        // if(!account) throw new Error("Get account error in database.");
    }
}