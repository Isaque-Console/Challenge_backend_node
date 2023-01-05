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

    async getAllItems(prismaClient: any): Promise<any> {
        return await prismaClient.user.findMany();
    };

    async createItem(item: any, prismaClient: any): Promise<any> {
        return await prismaClient.create({
            data: { ...item.props, id: item.id }
        });
    };

    async updateItemById(id: string, updatedDatas: any, prismaClient: any): Promise<any> {
        await prismaClient.user.update({
            where: {
                id
            },
            data: { ...updatedDatas }
        })
    }

    async updateManyItemsById(id: string, updatedDatas: any, prismaClient: any): Promise<any> {
        await prismaClient.user.updateMany({
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
