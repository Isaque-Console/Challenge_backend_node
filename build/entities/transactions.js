"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const Entity_1 = require("../core/Entity");
class Transactions extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const Transaction = new Transactions(props, id);
        return Transaction;
    }
}
exports.Transactions = Transactions;
