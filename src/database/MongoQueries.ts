import { Collection } from "mongodb";

export class MongoQueries {
    async getItemById(id: string, collection: Collection<any>): Promise<any> {
        const findResult = await collection.findOne({_id: id});

        return findResult;
    }

    async getUserByUsername(username: string, collection: Collection<any>): Promise<any> {
        const authenticatedUser = await collection.findOne({username});

        return authenticatedUser
    }

    async createItem(item: any, collection: Collection<any>): Promise<any> {
        const authenticatedUser = await collection.insertOne({...item});

        return authenticatedUser
    }
}