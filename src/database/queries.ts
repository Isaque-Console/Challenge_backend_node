export class Queries {
    async getItemById(id: string, prismaClient: any): Promise<any> {
        return await prismaClient.findFirst({
            where: { id }
        });
    };

    async getUserByUsername(username: string, prismaClient: any): Promise<any> {
        return await prismaClient.findFirst({
            where: { username }
        });
    };

    async getTransactionsByUserId(userId: string, prismaClient: any): Promise<any[]> {
        return await prismaClient.findMany({
            where: {
                OR: [
                    { debitedAccountId: userId },
                    { creditedAccountId: userId }
                ]
            }
        });
    };

    async getCashOutTransactions(userId: string, prismaClient: any): Promise<any[]> {
        return await prismaClient.findMany({
            where: { debitedAccountId: userId }
        });
    };

    async getCashInTransactions(userId: string, prismaClient: any): Promise<any[]> {
        return await prismaClient.findMany({
            where: { creditedAccountId: userId }
        });
    };

    async getAllItems(prismaClient: any): Promise<any> {
        return await prismaClient.findMany();
    };

    async createItem(item: any, prismaClient: any): Promise<any> {
        return await prismaClient.create({
            data: { ...item.props, id: item.id }
        });
    };

    async updateItemById(id: string, updatedDatas: any, prismaClient: any): Promise<any> {
        await prismaClient.update({
            where: {
                id
            },
            data: { ...updatedDatas }
        })
    }

    async updateManyItemsById(id: string, updatedDatas: any, prismaClient: any): Promise<any> {
        await prismaClient.updateMany({
            where: {
                id
            },
            data: { ...updatedDatas }
        })
    }

    async deleteItemById(id: string, prismaClient: any): Promise<any> {
        return await prismaClient.delete({
            where: {
                id
            }
        });
    };
}
