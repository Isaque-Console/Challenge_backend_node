import { Entity } from "../core/Entity";

export type AccountsProps = {
    balance: number;
}

export interface IAccounts {
    create(props: AccountsProps, id?: string): Promise<Accounts | undefined>;
}

export class Accounts extends Entity<AccountsProps> {
    constructor(props: AccountsProps, id?: string) {
        super(props, id);
    }
}