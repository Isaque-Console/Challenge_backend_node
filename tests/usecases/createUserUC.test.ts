import { CreateUserUC } from '../../src/usecases/createUserUC'
import { InMemoryAccountsRepository } from '../inMemory/in-memory-accounts-repository';
import { InMemoryUsersRepository } from '../inMemory/in-memory-users-repository'
import bcrypt from "bcrypt";

const validUsername = "Isaque";
const validPassword = "1234567A";
const validAccountId = "456";

const validUsersProps = {
    username: validUsername,
    password: validPassword,
    accountId: validAccountId
};

describe("usernameIsUnique tests", () => {
    it("Should return true when the username does not exist in the database", async () => {
        // given a username that does not exist in the database
        const username = "Isaque";
        // when the usernameIsUnique method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const isUnique = await useCase.usernameIsUnique(username);
        // then the method should return true
        expect(isUnique).toBe(true);
    });

    it("Should return false when the username exists in the database", async () => {
        // given a username that does not exist in the database
        const username = "test1";

        // when the usernameIsUnique method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const isUnique = await useCase.usernameIsUnique(username);

        // then the method should return true
        expect(isUnique).toBe(false);
    });
});

describe("validUsername tests", () => {
    it("should return true when username is valid", async () => {
        // given a valid username

        // when the validUsername method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const isValid = await useCase.usernameIsUnique(validUsername);

        // then the method should return true
        expect(isValid).toBe(true);
    });

    it("should throw an error when username has less than 3 characters", async () => {
        // given a invalid username
        const username = "abc";

        // when the validUsername method is invoked
        try {
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const isValid = await useCase.usernameIsUnique(username);
        } catch (error: any) {
            expect(error.message).toBe("O nome de usuário deve conter pelo menos 3 caracteres.");
        }

        // then the method should return true
    });

    it("should throw an error when username already exists", async () => {
        // given a invalid username
        const username = "test1";

        try {
            // when the validUsername method is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const isValid = await useCase.usernameIsUnique(username);
        } catch (error: any) {
            // then the method should return true
            expect(error.message).toBe("Nome de usuario existente.");

        }
    });
});

describe("validPassword tests", () => {
    it("Should return true when a valid password", () => {
        // given a valid password

        // when the validPassword method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const isValid = useCase.validPassword(validPassword);

        // then the method should return true
        expect(isValid).toBe(true);
    });

    it("Should throw an error when the password has less than 8 characters", () => {
        // given a valid password
        const password = "123456A";
        try {
            // when the validPassword method is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const isValid = useCase.validPassword(password);
        } catch (error: any) {
            // then the method should return true
            expect(error.message).toBe("Senha inválida.");
        }
    });

    it("Should throw an error when the password has no numbers", () => {
        // given a valid password
        const password = "abcdefgh";
        try {
            // when the validPassword method is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const isValid = useCase.validPassword(password);
        } catch (error: any) {
            // then the method should return true
            expect(error.message).toBe("Senha inválida.");
        }
    });

    it("Should throw an error when the password has no one upper case", () => {
        // given a valid password
        const password = "abcdefgh1234567a";
        try {
            // when the validPassword method is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const isValid = useCase.validPassword(password);
        } catch (error: any) {
            // then the method should return true
            expect(error.message).toBe("Senha inválida.");
        }
    });
});

describe("passwordHash tests", () => {
    it("Should return a hashed password", () => {
        // given a valid password

        // when passwordHash method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const hashedPassword = useCase.passwordHash(validPassword);

        // then the method should return a hashed password
        expect(hashedPassword.length).toBe(60);
    });

    it("Should match the password with the hash", async () => {
        // given a valid password

        // when passwordHash and bcrypt.compare method is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const hashedPassword = useCase.passwordHash(validPassword);
        const match = await bcrypt.compare(validPassword, hashedPassword);
        // then the bcrypt.compare method should return true
        expect(match).toBe(true);
    });
});

describe('Create Users entity', () => {
    it('Should be able to create a new Users instance by not sending an id', async () => {
        // given valid user props, and undefined id

        //when create function from useCase is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const user = await useCase.create(validUsersProps);
        const match = await bcrypt.compare(validUsersProps.password, user.props.password);

        //then a new user should be created with the respective properties and an UUID
        expect(user.props.username).toBe(validUsersProps.username);
        expect(user.props.accountId).toBe(validUsersProps.accountId);
        expect(match).toBe(true);
        expect(user.props.password.length).toBe(60);
        expect(user.id.length).toBe(36);
    });

    it('Should be able to create a new Users instance by sending an id', async () => {
        // given valid user props, and existing id
        const userId = "aaabbb";

        //when create function from useCase is invoked
        const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
        const user = await useCase.create(validUsersProps, userId);
        const match = await bcrypt.compare(validUsersProps.password, user.props.password);

        //then a new user should be created with the respective properties
        expect(user.props.username).toBe(validUsersProps.username);
        expect(user.props.accountId).toBe(validUsersProps.accountId);
        expect(match).toBe(true);
        expect(user.props.password.length).toBe(60);
        expect(user.id).toBe(userId);
    });

    it('Should throw an error when try to create a new Users instance with repeated username', async () => {
        // given invalid user props, and undefined id
        const invalidUsersProps = {
            username: "test1",
            password: validPassword,
            accountId: validAccountId
        };

        try {
            //when create function from useCase is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const user = await useCase.create(invalidUsersProps);
        } catch (error: any) {
            //then an error should be throwed
            expect(error.message).toBe("Nome de usuario existente.");
        }
    });

    it('Should throw an error when try to create a new Users instance with very short username', async () => {
        // given invalid user props, and undefined id
        const invalidUsersProps = {
            username: "AA",
            password: validPassword,
            accountId: validAccountId
        };

        try {
            //when create function from useCase is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const user = await useCase.create(invalidUsersProps);
        } catch (error: any) {
            //then an error should be throwed
            expect(error.message).toBe("O nome de usuário deve conter pelo menos 3 caracteres.");
        }
    });

    it('Should throw an error when try to create a new Users instance with very short password', async () => {
        // given invalid user props, and undefined id
        const invalidUsersProps = {
            username: validUsername,
            password: "123456A",
            accountId: validAccountId
        };

        try {
            //when create function from useCase is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const user = await useCase.create(invalidUsersProps);
        } catch (error: any) {
            //then an error should be throwed
            expect(error.message).toBe("Senha inválida.");
        }
    });

    it('Should throw an error when try to create a new Users instance with invalid password', async () => {
        // given invalid user props, and undefined id
        const invalidUsersProps = {
            username: validUsername,
            password: "1234567a",
            accountId: validAccountId
        };

        try {
            //when create function from useCase is invoked
            const useCase = new CreateUserUC(new InMemoryUsersRepository(), new InMemoryAccountsRepository());
            const user = await useCase.create(invalidUsersProps);
        } catch (error: any) {
            //then an error should be throwed
            expect(error.message).toBe("Senha inválida.");
        }
    });
});