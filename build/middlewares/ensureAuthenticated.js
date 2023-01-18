"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }
    // Bearer asdasdfg6fd54hg6sd4fh654hj546sa54df
    const [, token] = authToken.split(" ");
    try {
        (0, jsonwebtoken_1.verify)(token, "fb645857-7a93-48dd-91c0-001fa9d8f026");
        return next();
    }
    catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
