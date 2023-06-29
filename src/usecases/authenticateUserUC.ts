import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { UsersRepository } from "../repositories/usersRepository";
import { compare } from "bcryptjs";
import { CreateAccountCacheUC } from "./CreateAccountCacheUC";
import { AccountsRepository as AccountsRedisRepository } from "../redisRepositories/AccountsRepository";
import { AccountsRepository as AccountsPostgresRedisRepository } from "../repositories/accountsRepository";
import { log } from "console";

interface IRequest {
    username: string;
    password: string;
}

export class AuthenticateUserUC {
    constructor(
        private usersRepository: UsersRepository
    ) { }

    async passswordMatch(password: string, hashedPassword: string): Promise<boolean> {
        const match: boolean = await compare(password, hashedPassword);

        return match;
    }

    async execute({ username, password }: IRequest): Promise<any> {
        const userAlreadyExists: any = await this.usersRepository.getUserByUsername(username);

        if (!userAlreadyExists) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const passswordMatch = await this.passswordMatch(password, userAlreadyExists.password);

        if (!passswordMatch) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const accountsRedisRepository: AccountsRedisRepository = new AccountsRedisRepository();
        const accountsPostgresRepository: AccountsPostgresRedisRepository = new AccountsPostgresRedisRepository();
        const createAccountCacheUC: CreateAccountCacheUC = new CreateAccountCacheUC(accountsRedisRepository, accountsPostgresRepository);        
        await createAccountCacheUC.createAccountWithUserId(userAlreadyExists._id);

        const generateTokenProvider = new GenerateTokenProvider();
        const token: string = await generateTokenProvider.execute(userAlreadyExists._id);

        return { token, user: userAlreadyExists };
    }
}