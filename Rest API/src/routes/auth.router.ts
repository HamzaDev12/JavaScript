import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";
const authRouter: Router = Router();

authRouter.post("/singup", signUp);
authRouter.post("/signin", login);

export default authRouter;
