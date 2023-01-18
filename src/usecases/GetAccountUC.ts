import { IAccountsRepository } from "../repositories/accountsRepository";


export class GetAccountUC {
    constructor(
        private accountsRepository: IAccountsRepository,
    ) { }

    async getAccount(accountId: string): Promise<any> {
        const result = await this.accountsRepository.getAccount(accountId);
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }
}