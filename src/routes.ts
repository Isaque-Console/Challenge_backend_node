import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { GetBalanceController } from "./controllers/GetBalanceController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);
router.get("/balance", new GetBalanceController().handle);

export { router }