const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const userRouter = require("./src/routers/user.router");

app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
