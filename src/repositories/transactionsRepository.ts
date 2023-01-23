import { Queries } from '../database/queries';
import { Transactions } from '../entities/transactions';
import { postgresqlClient } from '../prisma/postgresqlClient';

export interface ITransactionsRepository {
    getTransactionById(id: string): Promise<Transactions | undefined>;
    createTransaction(transaction: Transactions): Promise<Transactions | undefined>;
    getTransactionsByUserId(userId: string): Promise<any[] | undefined>;
    getCashOutTransactions(userId: string): Promise<any[] | undefined>;
    getCashInTransactions(userId: string): Promise<any[] | undefined>;
}

export class TransactionsRepository implements ITransactionsRepository {
    async getTransactionById(id: string): Promise<Transactions | undefined> {
        const queries: Queries = new Queries();
        return await queries.getItemById(id, postgresqlClient.transactions);
    }

    async createTransaction(transaction: Transactions): Promise<Transactions> {
        const queries: Queries = new Queries();
        const result: Transactions | undefined = await queries.createItem(transaction, postgresqlClient.transactions);
        if (!result) throw new Error("Erro ao gravar a transação no banco de dados");
        return result;
    }

    async getTransactionsByUserId(userId: string): Promise<any[] | undefined> {
        const queries: Queries = new Queries();
        return await queries.getTransactionsByUserId(userId, postgresqlClient.transactions);
    }

    async getCashOutTransactions(userId: string): Promise<any[] | undefined> {
        const queries: Queries = new Queries();
        return await queries.getCashOutTransactions(userId, postgresqlClient.transactions);
    }

    async getCashInTransactions(userId: string): Promise<any[] | undefined> {
        const queries: Queries = new Queries();
        return await queries.getCashInTransactions(userId, postgresqlClient.transactions);
    }
}

