import { MongoQueries } from "../database/MongoQueries";
import { mongoCollection } from "../mongoDB/mongoClient";
import { Users, UsersProps } from "../entities/users";

export interface IUsersRepository {
    getUserByUsername(username: string): Promise<Users | undefined>;
    createUser(props: UsersProps): Promise<Users | undefined>;
}

export class UsersRepository implements IUsersRepository {
    async getUserByUsername(username: string): Promise<Users | undefined> {
        const collection: any = await mongoCollection('users');
        const queries: MongoQueries = new MongoQueries();
        return await queries.getUserByUsername(username, collection);
    }

    async createUser(props: UsersProps): Promise<Users> {
        throw new Error("Method not implemented");
    }
}