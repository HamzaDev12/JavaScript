const { Router } = require("express");
const {
  findbyID,
  readReply,
  createReply,
  updateReply,
  deleteReply,
} = require("../controllers/reply.controller");
const router = Router();

router.get("/find", findbyID);
router.get("/list", readReply);
router.post("/create", createReply);
router.put("/update/:replyId", updateReply);
router.delete("/delete/:replyId", deleteReply);

module.exports = router;
