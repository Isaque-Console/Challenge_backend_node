import { IUser, Users, UsersProps } from "../entities/users";
import { UsersRepository } from "../repositories/usersRepository";
import bcrypt from "bcrypt";
import { Accounts } from "../entities/accounts";
import { createAccountUC } from "./createAccountsUC";
import { AccountsRepository } from "../repositories/accountsRepository";

export class CreateUserUC implements IUser {
    constructor(
        private usersRepository: UsersRepository,
    ) { }

    async usernameIsUnique(username: string): Promise<boolean> {
        return !(await this.usersRepository.getUserByUsername(username));
    }

    async validUsername(username: string): Promise<boolean> {
        if (username.length > 2) {
            if (await this.usernameIsUnique(username)) return true;
            throw new Error("Nome de usuario existente.");
        }
        throw new Error("O nome de usuário deve conter pelo menos 3 caracteres.");
    }

    validPassword(password: string): boolean {
        // pelo menos 8 chars, um numero e uma letra maiuscula
        const pattern: RegExp = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (pattern.test(password) && password.length > 7) return true;
        throw new Error("Senha inválida.");
    }

    passwordHash(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);
        const hash: string = bcrypt.hashSync(password, salt);

        return hash
    }

    async create(props: UsersProps, id?: string | undefined): Promise<Users> {
        try {
            await this.validUsername(props.username)
            this.validPassword(props.password);
        } catch (error: any) {
            throw new Error(error.message);
        }

        const hashedPassword: string = this.passwordHash(props.password);

        return new Users({ ...props, password: hashedPassword }, id);
    }

    async execute(userProps: UsersProps, userId?: string): Promise<Users> {
        let createAccountUseCase: createAccountUC;
        let account: Accounts;
        let accountId: string;
        if (!userProps.accountId) {
            createAccountUseCase = new createAccountUC(new AccountsRepository());
            account = await createAccountUseCase.create();
            accountId = account.id
        } else {
            accountId = userProps.accountId;
        }
        userProps = { ...userProps, accountId }
        const user: Users = await this.create(userProps, userId);
        const createdUser: Users = await this.usersRepository.createUser(user.props, user.id);
        return createdUser;
    }
}