import { Entity } from "../core/Entity";

type TransactionsProps = {
    debitedAccountId: string;
    creditedAccountId: string;
    value: number;
    createdAt: Date;
}

export class Transactions extends Entity<TransactionsProps> {
    constructor(props: TransactionsProps, id?: string) {
        super(props, id);
    }

    static create(props: TransactionsProps, id?: string): Transactions {
        const Transaction = new Transactions(props, id);
        return Transaction;
    }
}