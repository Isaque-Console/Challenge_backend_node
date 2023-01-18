import { Entity } from "../core/Entity";

export type TransactionsProps = {
    debitedAccountId: string;
    creditedAccountId: string;
    value: number;
    createdat: Date;
}

export interface ITransactions {
    create(props: TransactionsProps, id?: string): Promise<Transactions | undefined>;
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