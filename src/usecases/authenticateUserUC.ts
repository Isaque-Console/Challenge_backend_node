import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";
import { UsersRepository } from "../repositories/usersRepository";
import { compare } from "bcryptjs";

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

    async execute({ username, password }: IRequest): Promise<string> {
        const userAlreadyExists: any = await this.usersRepository.getUserByUsername(username);

        if (!userAlreadyExists) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const passswordMatch = await this.passswordMatch(password, userAlreadyExists.password);

        if (!passswordMatch) {
            throw new Error("Nome de usuário ou senha incorreto!");
        }

        const generateTokenProvider = new GenerateTokenProvider();
        const token: string = await generateTokenProvider.execute(userAlreadyExists.id);

        return token;
    }
}