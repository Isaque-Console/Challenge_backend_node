import { IAccounts, Accounts, AccountsProps } from "../entities/accounts";
import { IAccountsRepository } from "../repositories/accountsRepository";


export class createAccountUC implements IAccounts {
    constructor(
        private accountsRepository: IAccountsRepository,
    ) { }

    async create(props?: AccountsProps, id?: string): Promise<Accounts> {
        const account: Accounts = new Accounts({ ...props, balance: 100 }, id);
        const result = await this.accountsRepository.createAccount(account);
        if (!result) throw new Error("Erro ao criar conta no banco de dados");
        return result;
    }
}