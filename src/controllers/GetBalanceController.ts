import { Request, Response } from 'express';
import { AccountsRepository } from '../repositories/accountsRepository';
import { Accounts } from '../entities/accounts';
import { GetAccountUC } from '../usecases/GetAccountUC';

export class GetBalanceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { accountId } = request.params;
        const repository: AccountsRepository = new AccountsRepository();
        const useCase: GetAccountUC = new GetAccountUC(repository);
        const result: Accounts = await useCase.getAccount(accountId);

        return response.json(result);
    }
}


