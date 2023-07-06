import { IUsersRepository as IUsersRedisRepository } from "../redisRepositories/UsersRepository";
import { IUsersRepository as IUsersPostgresRepository } from "../repositories/usersRepository";
import { Accounts } from "../entities/accounts";
import { GetUserUC } from "./GetUserUC";

export class CreateUserCacheUC {
    constructor(
        private usersRedisRepository: IUsersRedisRepository,
        private usersPostgresRepository: IUsersPostgresRepository
    ) { }

    async create(userId: string): Promise<Accounts> {
        const userAlredyExists: any = await this.usersRedisRepository.getUserByKey(userId);

        if(userAlredyExists) return userAlredyExists;

        const getUserUC: GetUserUC = new GetUserUC(this.usersPostgresRepository);
        const user: any = await getUserUC.getUserById(userId);
        
        const createdUser: Accounts = await this.usersRedisRepository.create(JSON.stringify(user), userId);
        if(!createdUser) throw new Error("Create user cache error.");

        return createdUser;
    }
}