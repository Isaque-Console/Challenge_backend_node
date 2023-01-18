import { ITransactions, Transactions, TransactionsProps } from "../entities/transactions";
import { AccountsRepository } from "../repositories/accountsRepository";
import { ITransactionsRepository } from "../repositories/transactionsRepository";
import { UpdateAccountUC } from "./UpdateAccountUC";


export class CreateTransactionUC implements ITransactions {
    constructor(
        private transactionsRepository: ITransactionsRepository,
    ) { }

    async create(props: TransactionsProps, id?: string): Promise<Transactions> {
        const transaction: Transactions = new Transactions(props, id);
        const result = await this.transactionsRepository.createTransaction(transaction);
        if (!result) throw new Error("Erro ao criar conta no banco de dados");
        return result;
    }

    async execute(props: TransactionsProps, accountsRepository: AccountsRepository, id?: string) {
        if (props.debitedAccountId === props.creditedAccountId) throw new Error("Não pode-se fazer uma transação para si mesmo");
        const updateAccountUC = new UpdateAccountUC(accountsRepository);
        await updateAccountUC.execute(props.debitedAccountId, props.creditedAccountId, props.value);
        const createdTrasaction: Transactions = await this.create(props, id);
        return createdTrasaction;
    }
}