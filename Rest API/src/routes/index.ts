import { Router } from "express";
import authRouter from "./auth.router";
const rootRouter: Router = Router();

rootRouter.use("/auth", authRouter);

export default rootRouter;
