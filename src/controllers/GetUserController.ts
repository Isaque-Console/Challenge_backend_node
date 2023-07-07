import { Request, Response } from 'express';
import { GetUserUC } from '../usecases/GetUserUC';
import { Users } from '../entities/users';
import { UsersRepository as UsersPostgresRepository } from '../repositories/usersRepository';
import { GetUserCacheUC } from '../usecases/GetUserCacheUC';
import { UsersRepository as UsersRedisRepository } from '../redisRepositories/UsersRepository';


export class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;

            // using redis
            console.time();
            const usersRedisRepository: UsersRedisRepository = new UsersRedisRepository();
            const getUserCacheUC: GetUserCacheUC = new GetUserCacheUC(usersRedisRepository);
            const userCache: Users = await getUserCacheUC.getUserById(userId);
            console.timeEnd();

            if(userCache) return response.status(200).json(userCache);

            console.log("There is nothing in cache, so fetching datas from postgres.");
            // using postgres
            console.time();
            const usersPostgresRepository: UsersPostgresRepository = new UsersPostgresRepository();
            const getUserUC: GetUserUC = new GetUserUC(usersPostgresRepository);
            const user: Users = await getUserUC.getUserById(userId);
            console.timeEnd();

            return response.status(200).json(user);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}