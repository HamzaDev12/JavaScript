const { Router } = require("express");
const router = Router();
const {
  createPost,
  deletinfUser,
  findbyID,
  readPost,
  updatePost,
} = require("../controllers/posts.controller");

router.get("/list", readPost);
router.post("/create", createPost);
router.get("/find/:postID", findbyID);
router.put("/update", updatePost);
router.delete("/delete", deletinfUser);

module.exports = router;
