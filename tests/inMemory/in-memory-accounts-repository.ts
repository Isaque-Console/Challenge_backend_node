import { Accounts, AccountsProps } from "../../src/entities/accounts";
import { IAccountsRepository } from "../../src/repositories/accountsRepository";

export class InMemoryAccountsRepository implements IAccountsRepository {
    createAccount(account: Accounts): Promise<Accounts> {
        throw new Error("Method not implemented.");
    }
    getAccountById(accountId: string): Promise<Accounts> {
        throw new Error("Method not implemented.");
    }
    getAccountByUserId(userId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateAccount(id: string, props: AccountsProps): Promise<any> {
        throw new Error("Method not implemented.");
    }
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