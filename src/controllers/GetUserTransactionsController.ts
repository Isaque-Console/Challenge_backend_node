import { Request, Response } from 'express';
import { Transactions } from '../entities/transactions';
import { TransactionsRepository } from '../repositories/transactionsRepository';
import { GetTransactionsUC } from '../usecases/GetTransactionsUC';

export class GetUserTransactionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params;
        const repository: TransactionsRepository = new TransactionsRepository();
        const useCase: GetTransactionsUC = new GetTransactionsUC(repository);
        const transactions: Transactions = await useCase.getTransactionsByUserId(userId);

        return response.json(transactions);
    }
}


