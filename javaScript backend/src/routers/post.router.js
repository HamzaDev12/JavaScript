const { Router } = require("express");
const router = Router();
const {
  createPost,
  findbyID,
  readPost,
  updatePost,
  deletingPost,
} = require("../controllers/posts.controller");

router.get("/list", readPost);
router.post("/create", createPost);
router.get("/find/:postID", findbyID);
router.put("/update", updatePost);
router.delete("/delete/:postID", deletingPost);

module.exports = router;
