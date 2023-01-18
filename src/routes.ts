import { Router } from "express";
import { CreateUserController } from "./controllers/createUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { GetBalanceController } from "./controllers/GetBalanceController";
import { FinancialTransactionController } from "./controllers/FinancialTransactionController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { GetUserTransactionsController } from "./controllers/GetUserTransactionsController";
import { GetFilteredTransactionsController } from "./controllers/GetFilteredTransactionsController";

const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/login", new AuthenticateUserController().handle);
router.get("/account/:accountId", ensureAuthenticated, new GetBalanceController().handle);
router.put("/transaction/:payerAccountId", ensureAuthenticated, new FinancialTransactionController().handle);
router.get("/transactions/:userId", ensureAuthenticated, new GetUserTransactionsController().handle);
router.get("/transactions/filter/:userId", ensureAuthenticated, new GetFilteredTransactionsController().handle);

export { router }