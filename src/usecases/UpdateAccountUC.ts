import { AccountsProps } from "../entities/accounts";
import { AccountsRepository, IAccountsRepository } from "../repositories/accountsRepository";
import { GetAccountUC } from "./GetAccountUC";


export class UpdateAccountUC {
    constructor(
        private accountsRepository: IAccountsRepository,
    ) { }

    updateBalance(currencyBalance: number, transferAmount: number): number {
        const updatedBalance = currencyBalance - transferAmount;
        if (updatedBalance < 0) throw new Error("Não existe saldo suficiente na conta de origem.");
        return updatedBalance;
    }

    async updateAccountBalance(id: string, transferAmount: number): Promise<any> {
        const getUseCase: GetAccountUC = new GetAccountUC(this.accountsRepository);
        const account: any = await getUseCase.getAccount(id);

        const updatedBalance: AccountsProps = {
            balance: this.updateBalance(account.balance, transferAmount)
        }

        const result: any = await this.accountsRepository.updateAccount(id, updatedBalance);

        return result;
    }

    async execute(payerAccountId: string, payeeAccountId: string, transferAmount: number): Promise<any> {
        await this.updateAccountBalance(payerAccountId, transferAmount);
        await this.updateAccountBalance(payeeAccountId, -transferAmount);

        return "Transação feita com sucesso.";
    }
}