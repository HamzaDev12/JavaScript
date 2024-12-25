const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const userRouter = require("./src/routers/user.router");
const postRouter = require("./src/routers/post.router");
const commentRouter = require("./src/routers/comment.router");
const reactionRouter = require("./src/routers/reaction.router");
const replyRouter = require("./src/routers/reply.router");

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/reactions", reactionRouter);
app.use("/reply", replyRouter);

app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
