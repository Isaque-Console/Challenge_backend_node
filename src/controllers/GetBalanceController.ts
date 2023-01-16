import { Request, Response } from 'express';
import { AccountsRepository } from '../repositories/accountsRepository';
import { Accounts } from '../entities/accounts';

export class GetBalanceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { accountId } = request.body;
        const repository: AccountsRepository = new AccountsRepository();
        const useCase: GetBalanceUC = new GetBalanceUC(repository);
        const result: Accounts = await useCase.execute(accountId);

        return response.json(result);
    }
}


