"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoCollection = void 0;
const mongodb_1 = require("mongodb");
const url = 'mongodb://localhost:27017';
const client = new mongodb_1.MongoClient(url);
const dbName = 'financial_bank';
const mongoCollection = (tableName) => __awaiter(void 0, void 0, void 0, function* () {
    const connect = yield client.connect();
    console.log('Connected successfully to mongoDB');
    const db = client.db(dbName);
    const collection = db.collection(tableName);
    return collection;
});
exports.mongoCollection = mongoCollection;
//# sourceMappingURL=mongoClient.js.map