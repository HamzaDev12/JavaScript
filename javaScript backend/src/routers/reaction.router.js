const { Router } = require("express");
const {
  createReation,
  deleteReaction,
  findbyID,
  readReaction,
  updateReaction,
} = require("../controllers/reacrion.controller");
const router = Router();

router.get("/list", readReaction);
router.get("/find/:reationId", findbyID);
router.post("/create", createReation);
router.put("/update", updateReaction);
router.delete("/delete/:reationId", deleteReaction);

module.exports = router;
