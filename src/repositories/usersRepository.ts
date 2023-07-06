import { Queries } from '../database/queries';
import { Users, UsersProps } from '../entities/users';
import { postgresqlClient } from '../prisma/postgresqlClient';

export interface IUsersRepository {
    getUserById(userId: string): Promise<any>;
    getUserByUsername(username: string): Promise<Users | undefined>;
    createUser(props: UsersProps, id?: string): Promise<Users | undefined>;
}

export class UsersRepository implements IUsersRepository {
    async getUserById(userId: string): Promise<any> {
        const queries: Queries = new Queries();
        return await queries.getItemById(userId, postgresqlClient.users);
    }

    async getUserByUsername(username: string): Promise<Users | undefined> {
        const queries: Queries = new Queries();
        return await queries.getUserByUsername(username, postgresqlClient.users);
    }

    async createUser(props: UsersProps, id?: string): Promise<Users> {
        const user = new Users(props, id);
        const queries: Queries = new Queries();
        const result: Users | undefined = await queries.createItem(user, postgresqlClient.users);
        if(!result) throw new Error("Erro ao criar usuário no banco de dados");
        return result;
    }
}

