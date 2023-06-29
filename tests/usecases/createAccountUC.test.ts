import { CreateAccountUC } from '../../src/usecases/createAccountsUC'
import { InMemoryAccountsRepository } from '../inMemory/in-memory-accounts-repository';

describe("Create Accounts entity", () => {
    it("Should return a new instace of Accounts with balance to equal 100.00", async () => {
        // given no balance

        // when the create method is invoked
        const useCase = new CreateAccountUC(new InMemoryAccountsRepository());
        const account = await useCase.create({ balance: 100 });

        // then the method should return an Accounts object
        expect(account.props.balance).toBe(100);
    });
});