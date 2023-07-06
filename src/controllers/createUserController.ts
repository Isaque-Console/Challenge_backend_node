import { CreateUserUC } from '../usecases/createUserUC'
import { Request, Response } from 'express';
import { Users, UsersProps } from '../entities/users';
import { UsersRepository } from '../repositories/usersRepository';
import { AccountsRepository } from '../repositories/accountsRepository';

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, username, password, accountId } = request.body;

        const newUserProps: UsersProps = { username, password, accountId };
        const useCase: CreateUserUC = new CreateUserUC(new UsersRepository(), new AccountsRepository());
        const result: Users = await useCase.execute(newUserProps, userId);

        return response.json(result);
    }
}


