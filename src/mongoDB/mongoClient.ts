import { Collection, MongoClient } from 'mongodb';

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

const dbName = 'financial_bank';

export const mongoCollection = async (tableName: string): Promise<Collection<any>> => {
    const connect = await client.connect();
    
    console.log('Connected successfully to mongoDB');
    const db = client.db(dbName);
    const collection = db.collection(tableName);

    return collection;
}