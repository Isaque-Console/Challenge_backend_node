import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }

    // Bearer asdasdfg6fd54hg6sd4fh654hj546sa54df
    const [, token] = authToken.split(" ");

    try {
        verify( token, "fb645857-7a93-48dd-91c0-001fa9d8f026");

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid"
        });
    }
}