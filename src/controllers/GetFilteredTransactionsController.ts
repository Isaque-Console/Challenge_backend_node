import { Request, Response } from 'express';
import { TransactionsRepository } from '../repositories/transactionsRepository';
import { GetFilteredTransactionsUC } from '../usecases/GetFilteredTransactionsUC';

export class GetFilteredTransactionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params;
        const { tag, date } = request.body;

        const repository: TransactionsRepository = new TransactionsRepository();
        const useCase: any = new GetFilteredTransactionsUC(repository);
        const filteredTransactions: any[] = await useCase[`get${tag}Transactions`](userId);

        const result: any[] = date ? useCase.getTransactionsByDate(date, filteredTransactions) : filteredTransactions;

        return response.json(result);
    }
}


