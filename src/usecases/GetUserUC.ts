import { IUsersRepository } from "../repositories/usersRepository";

export class GetUserUC {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async getUserById(userId: string): Promise<any> {
        const result = await this.usersRepository.getUserById(userId);
        if (!result) throw new Error("Não existe usuario com esse Id.");
        return result;
    }

    async getUserByUsername(username: string): Promise<any> {
        const result = await this.usersRepository.getUserByUsername(username);
        if (!result) throw new Error("Não existe usuario com esse username.");
        return result;
    }
}