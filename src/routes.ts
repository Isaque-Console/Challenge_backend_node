import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { GetBalanceController } from "./controllers/GetBalanceController";
import { FinancialTransactionController } from "./controllers/FinancialTransactionController";
import { ensureAuthenticatedAndAuthorized } from "./middlewares/ensureAuthenticatedAndAuthorized";
import { GetUserTransactionsController } from "./controllers/GetUserTransactionsController";
import { GetFilteredTransactionsController } from "./controllers/GetFilteredTransactionsController";

const router = Router();

router.get("/account/:userId", ensureAuthenticatedAndAuthorized, new GetBalanceController().handle);
router.get("/transactions/:userId", ensureAuthenticatedAndAuthorized, new GetUserTransactionsController().handle);
router.get("/transactions/filter/:userId", ensureAuthenticatedAndAuthorized, new GetFilteredTransactionsController().handle);
router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);
router.put("/transaction/:userId", ensureAuthenticatedAndAuthorized, new FinancialTransactionController().handle);

export { router }