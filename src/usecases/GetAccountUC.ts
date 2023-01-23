import { IAccountsRepository } from "../repositories/accountsRepository";

export class GetAccountUC {
    constructor(
        private accountsRepository: IAccountsRepository,
    ) { }

    async getAccountById(accountId: string): Promise<any> {
        if(!accountId) throw new Error("AccountId is missing.");
        const result = await this.accountsRepository.getAccountById(accountId);
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }

    async getAccountByUserId(userId: string): Promise<any> {
        if(!userId) throw new Error("PayerId is missing.");
        const result = await this.accountsRepository.getAccountByUserId(userId);
        
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }
}