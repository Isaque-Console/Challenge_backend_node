import { Request, Response } from 'express';
import { AuthenticateUserUC } from '../usecases/authenticateUserUC';
import { UsersRepository } from '../mongoRepositories/UsersRepository';
import { UsersRepository as UsersCacheRepository } from '../redisRepositories/UsersRepository';

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { username, password } = request.body;
            
            const useCase = new AuthenticateUserUC(new UsersCacheRepository(), new UsersRepository());
            const authenticatedUser: any = await useCase.execute({ username, password });

            return response.status(200).json(authenticatedUser);
        } catch (error: any) {
            return response.status(400).json(error.message);
        }
    }
}


