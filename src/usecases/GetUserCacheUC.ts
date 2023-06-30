import { IUsersRepository } from "../redisRepositories/UsersRepository";

export class GetUserCacheUC {
    constructor(
        private usersRepository: IUsersRepository,
    ) { }

    async getUserById(userId: string): Promise<any> {
        const userCache = await this.usersRepository.getUserByKey(userId);
        console.log("Fetching cache in redis.");
        return JSON.parse(userCache);
    }
}