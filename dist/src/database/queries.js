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
exports.Queries = void 0;
class Queries {
    getItemById(id, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findFirst({
                where: { id }
            });
        });
    }
    ;
    getUserByUsername(username, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findFirst({
                where: { username }
            });
        });
    }
    ;
    getAccountByUserId(userId, userPrismaClient, accountPrismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userPrismaClient.findFirst({
                where: { id: userId }
            });
            if (!user)
                throw new Error("Não existe usuário com esse Id");
            return yield accountPrismaClient.findFirst({
                where: { id: user.accountId }
            });
        });
    }
    ;
    getTransactionsByUserId(userId, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findMany({
                where: {
                    OR: [
                        { debitedAccountId: userId },
                        { creditedAccountId: userId }
                    ]
                }
            });
        });
    }
    ;
    getCashOutTransactions(userId, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findMany({
                where: { debitedAccountId: userId }
            });
        });
    }
    ;
    getCashInTransactions(userId, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findMany({
                where: { creditedAccountId: userId }
            });
        });
    }
    ;
    getAllItems(prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.findMany();
        });
    }
    ;
    createItem(item, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.create({
                data: Object.assign(Object.assign({}, item.props), { id: item.id })
            });
        });
    }
    ;
    updateItemById(id, updatedDatas, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient.update({
                where: {
                    id
                },
                data: Object.assign({}, updatedDatas)
            });
        });
    }
    updateManyItemsById(id, updatedDatas, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prismaClient.updateMany({
                where: {
                    id
                },
                data: Object.assign({}, updatedDatas)
            });
        });
    }
    deleteItemById(id, prismaClient) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prismaClient.delete({
                where: {
                    id
                }
            });
        });
    }
    ;
}
exports.Queries = Queries;
//# sourceMappingURL=queries.js.map