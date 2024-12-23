const { Router } = require("express");
const router = Router();
const {
  updateuser,
  createUser,
  getAllUser,
  findbyId,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/create", createUser);
router.put("/update", updateuser);
router.get("/get", getAllUser);
router.get("/find/:userId", findbyId);
router.delete("/delete/:userId", deleteUser);

module.exports = router;
