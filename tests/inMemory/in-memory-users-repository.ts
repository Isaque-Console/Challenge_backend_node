import { Users } from "../../src/entities/users";
import { UsersRepository } from "../../src/repositories/usersRepository";

export class InMemoryUsersRepository implements UsersRepository {
    private items: Users[] = [
        new Users({
            username: "test1",
            password: "passw1",
            accountId: "account1"
        }),
        new Users({
            username: "test2",
            password: "passw2",
            accountId: "account2"
        }),
        new Users({
            username: "test3",
            password: "passw3",
            accountId: "account3"
        })
    ];

    async findByUsername(username: string): Promise<Users | null> {
        const Users = this.items.find(user => user.props.username === username)
        if (!Users) return null;

        return Users;
    }
}