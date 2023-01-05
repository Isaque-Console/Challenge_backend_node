import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);

export { router }