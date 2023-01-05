import { Entity } from "../core/Entity";

export type UsersProps = {
    username: string;
    password: string;
    accountId: string;
}

export interface IUser {
    create(props: UsersProps, id?: string): Promise<Users>;
}

export class Users extends Entity<UsersProps> {
    constructor(props: UsersProps, id?: string) {
        super(props, id);
    }
}