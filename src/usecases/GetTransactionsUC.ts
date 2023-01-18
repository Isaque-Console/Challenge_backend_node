import { ITransactionsRepository } from "../repositories/transactionsRepository";


export class GetTransactionsUC {
    constructor(
        private transactionsRepository: ITransactionsRepository,
    ) { }

    async getTransactionsByUserId(userId: string): Promise<any> {
        const result = await this.transactionsRepository.getTransactionsByUserId(userId);
        if (!result) throw new Error("Não existe conta com esse ID");
        return result;
    }
}