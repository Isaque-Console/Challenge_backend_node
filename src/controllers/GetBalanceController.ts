import { Request, Response } from 'express';
import { AccountsRepository as AccountsPostgresRepository } from '../repositories/accountsRepository';
import { Accounts } from '../entities/accounts';
import { GetAccountUC } from '../usecases/GetAccountUC';

export class GetBalanceController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;
            
            const accountsPostgresRepository: AccountsPostgresRepository = new AccountsPostgresRepository();
            const getAccountUC: GetAccountUC = new GetAccountUC(accountsPostgresRepository);
            const account: Accounts = await getAccountUC.getAccountByUserId(userId);

            return response.status(200).json(account);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}


