const { Router } = require("express");
const router = Router();
const {
  createReation,
  deleteReaction,
  findbyID,
  readReaction,
  updateReaction,
} = require("../controllers/reacrion.controller");

router.get("/list", readReaction);
router.get("/find/:reationId", findbyID);
router.post("/create", createReation);
router.put("/update", updateReaction);
router.delete("/delete", deleteReaction);

module.exports = router;
