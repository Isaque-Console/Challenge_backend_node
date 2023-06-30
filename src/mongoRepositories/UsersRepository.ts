import { MongoQueries } from "../database/MongoQueries";
import { mongoCollection } from "../mongoDB/mongoClient";
import { Users, UsersProps } from "../entities/users";

export interface IUsersRepository {
    getUserById(userId: string): Promise<any>;
    getUserByUsername(username: string): Promise<any>;
    createUser(props: UsersProps): Promise<Users | undefined>;
}

export class UsersRepository implements IUsersRepository {
    async getUserById(userId: string): Promise<any> {
        const collection: any = await mongoCollection('users');
        const queries: MongoQueries = new MongoQueries();
        return await queries.getItemById(userId, collection);
    }

    async getUserByUsername(username: string): Promise<any> {
        const collection: any = await mongoCollection('users');
        const queries: MongoQueries = new MongoQueries();
        return await queries.getUserByUsername(username, collection);
    }

    async createUser(props: UsersProps): Promise<Users> {
        throw new Error("Method not implemented");
    }
}