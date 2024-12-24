const { Router } = require("express");
const {
  findbyID,
  updateComment,
  createCopmment,
  readComment,
  deletecomment,
} = require("../controllers/comment.controller");
const router = Router();

router.get("/find/:commentId", findbyID);
router.put("/update", updateComment);
router.post("/create", createCopmment);
router.get("list", readComment);
router.delete("/delete/:commentId", deletecomment);

module.exports = router;
