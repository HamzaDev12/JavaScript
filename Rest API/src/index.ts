import express from "express";
import { PORT } from "./screts";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
const app = express();

app.use(express.json());
app.use("/api", rootRouter);
export const prisma = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log(`server runn  ing on port ${PORT}`);
});