import { Request, Response } from 'express';
import { AuthenticateUserUC } from '../usecases/authenticateUserUC';
import { UsersRepository } from '../repositories/usersRepository';

export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {username, password} = request.body;
        const repository: UsersRepository = new UsersRepository();
        const useCase = new AuthenticateUserUC(repository);
        const JWTToken: string = await useCase.execute({username, password});

        return response.status(200).json(JWTToken);
    }
}


