import { ITransactionsRepository } from "../repositories/transactionsRepository";


export class GetFilteredTransactionsUC {
    constructor(
        private transactionsRepository: ITransactionsRepository,
    ) { }

    async getCashOutTransactions(userId: string): Promise<any> {
        const result = await this.transactionsRepository.getCashOutTransactions(userId);
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }

    async getCashInTransactions(userId: string): Promise<any> {
        const result = await this.transactionsRepository.getCashInTransactions(userId);
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }
}