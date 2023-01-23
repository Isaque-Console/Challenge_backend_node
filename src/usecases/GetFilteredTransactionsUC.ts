import { ITransactionsRepository } from "../repositories/transactionsRepository";


export class GetFilteredTransactionsUC {
    constructor(
        private transactionsRepository: ITransactionsRepository,
    ) { }

    async getCashOutTransactions(userId: string): Promise<any> {
        const result = await this.transactionsRepository.getCashOutTransactions(userId);
        if (!result) throw new Error("Não existem transações de CashOut com esse ID.");
        return result;
    }

    async getCashInTransactions(userId: string): Promise<any> {
        const result = await this.transactionsRepository.getCashInTransactions(userId);
        if (!result) throw new Error("Não existem transações de CashIn com esse ID.");
        return result;
    }

    getTransactionsByDate(date: string, transactions: any[]): any[] {
        const dateFormatted = new Date(date);
        const transactionsByDate: any[] = transactions.filter(transaction => transaction.createdat.toString() == dateFormatted.toString());
        if (transactionsByDate.length == 0) throw new Error("Não existem transações para esse dia.");

        return transactionsByDate
    }
}