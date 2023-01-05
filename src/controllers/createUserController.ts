import { CreateUserUC } from '../usecases/createUserUC'
import { Request, Response } from 'express';
import { Users, UsersProps } from '../entities/users';
import { UsersRepository } from '../repositories/usersRepository';

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, username, password, accountId } = request.body;
        const newUserProps: UsersProps = { username, password, accountId };
        const repository: UsersRepository = new UsersRepository();
        const useCase: CreateUserUC = new CreateUserUC(repository);
        const result: Users = await useCase.execute(newUserProps, userId);

        return response.json(result);
    }
}


