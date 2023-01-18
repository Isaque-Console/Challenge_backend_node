import { Request, Response } from 'express';
import { Transactions } from '../entities/transactions';
import { TransactionsRepository } from '../repositories/transactionsRepository';
import { GetFilteredTransactionsUC } from '../usecases/GetFilteredTransactionsUC';

export class GetFilteredTransactionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params;
        const { tag } = request.body;
        const repository: TransactionsRepository = new TransactionsRepository();
        const useCase: any = new GetFilteredTransactionsUC(repository);
        const filteredTransactions: Transactions = await useCase[`get${tag}Transactions`](userId);

        return response.json(filteredTransactions);
    }
}


