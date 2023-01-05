"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use((error, request, response, next) => {
    return response.status(400).json({
        "status": "Error",
        "message": error.message
    });
});
app.listen(3000, () => console.log("Server is running on port 3000"));
