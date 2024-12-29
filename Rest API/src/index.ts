import express from "express";
import { PORT } from "./screts";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error.middleware";
import { signUpSchema } from "./schemas/user.schemas";
const app = express();

app.use(express.json());
app.use("/api", rootRouter);
app.use(errorMiddleware);
export const prisma = new PrismaClient({
  log: ["query"],
}).$extends({
  query: {
    users: {
      create({ args, query }) {
        args.data = signUpSchema.parse(args.data);
        return query(args);
      },
    },
  },
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
