import { Collection } from "mongodb";

export class MongoQueries {
    async getItemById(id: string, collection: Collection<any>): Promise<any> {
        const findResult = await collection.find({id}).toArray();
    }

    async getUserByUsername(username: string, collection: Collection<any>): Promise<any> {
        const authenticatedUser = await collection.findOne({username});

        return authenticatedUser
    }
}