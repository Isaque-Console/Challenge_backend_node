"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticatedAndAuthorized = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticatedAndAuthorized(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }
    // Bearer asdasdfg6fd54hg6sd4fh654hj546sa54df
    const [, token] = authToken.split(" ");
    try {
        const { userId } = request.params;
        const tokenObject = (0, jsonwebtoken_1.verify)(token, "fb645857-7a93-48dd-91c0-001fa9d8f026");
        return response.status(401).json({
            message: tokenObject
        });
        if (tokenObject.userId !== userId)
            throw new Error();
        return next();
    }
    catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}
exports.ensureAuthenticatedAndAuthorized = ensureAuthenticatedAndAuthorized;
//# sourceMappingURL=ensureAuthenticatedAndAuthorized.js.map