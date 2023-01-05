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
exports.GenerateTokenProvider = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class GenerateTokenProvider {
    execute(userId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const secretKey = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : "fb645857-7a93-48dd-91c0-001fa9d8f026";
            const token = (0, jsonwebtoken_1.sign)({}, secretKey, {
                subject: userId,
                expiresIn: "20s"
            });
            return token;
        });
    }
}
exports.GenerateTokenProvider = GenerateTokenProvider;
