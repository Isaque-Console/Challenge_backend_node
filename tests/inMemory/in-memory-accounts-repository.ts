import { Accounts, AccountsProps } from "../../src/entities/accounts";
import { IAccountsRepository } from "../../src/repositories/accountsRepository";

export class InMemoryAccountsRepository implements IAccountsRepository {
    accountObject: AccountsProps = { balance: 100.00 };
    private items: Accounts[] = [
        new Accounts(this.accountObject),
        new Accounts(this.accountObject),
        new Accounts(this.accountObject)
    ];

    async getById(id: string): Promise<Accounts | undefined> {
        return this.items.find(account => account.id === id);
    }
}