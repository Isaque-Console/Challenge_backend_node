import { IUsersRepository as IUsersRedisRepository } from "../redisRepositories/UsersRepository";
import { IUsersRepository as IUsersPostgresRepository } from "../repositories/usersRepository";
import { Accounts } from "../entities/accounts";
import { GetUserUC } from "./GetUserUC";
import { log } from "console";

export class CreateUserCacheUC {
    constructor(
        private accountsRedisRepository: IUsersRedisRepository,
        private accountsPostgresRepository: IUsersPostgresRepository
    ) { }

    async create(userId: string): Promise<Accounts> {
        const userAlredyExists: any = await this.accountsRedisRepository.getUserByKey(userId);

        if(userAlredyExists) return userAlredyExists;

        const getUserUC: GetUserUC = new GetUserUC(this.accountsPostgresRepository);
        const user: any = await getUserUC.getUserById(userId);
        
        const createdUser: Accounts = await this.accountsRedisRepository.create(JSON.stringify(user), userId);
        if(!createdUser) throw new Error("Create user cache error.");

        return createdUser;
    }
}