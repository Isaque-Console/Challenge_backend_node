import { IUsersRepository } from "../repositories/usersRepository";


export class GetUserUC {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async getUserByUsername(username: string): Promise<any> {
        const result = await this.usersRepository.getUserByUsername(username);
        if (!result) throw new Error("Não existe conta com esse username.");
        return result;
    }
}