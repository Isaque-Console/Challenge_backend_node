import { Request, Response } from 'express';
import { Transactions, TransactionsProps } from '../entities/transactions';
import { AccountsRepository } from '../repositories/accountsRepository';
import { TransactionsRepository } from '../repositories/transactionsRepository';
import { UsersRepository } from '../repositories/usersRepository';
import { CreateTransactionUC } from '../usecases/CreateTransactionsUC';
import { GetUserUC } from '../usecases/GetUserUC';

export class FinancialTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { payerAccountId } = request.params;
        const { payeeUsername, transferAmount } = request.body;

        const getUserUC:GetUserUC = new GetUserUC(new UsersRepository());
        const payeeUser: any = await getUserUC.getUserByUsername(payeeUsername);

        const accountsRepository: AccountsRepository = new AccountsRepository();
        const createTransactionUC = new CreateTransactionUC(new TransactionsRepository());

        const newTransactionProps: TransactionsProps = {
            debitedAccountId: payerAccountId,
            creditedAccountId: payeeUser.accountId,
            value: transferAmount,
            createdat: new Date()
        };

        const newTransaction : Transactions = await createTransactionUC.execute(newTransactionProps, accountsRepository);

        return response.json(newTransaction);
    }
}

