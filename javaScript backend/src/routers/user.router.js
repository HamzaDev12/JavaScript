const { Router } = require("express");
const {
  updateuser,
  createUser,
  getAllUser,
  findbyId,
  deleteUser,
} = require("../controllers/user.controller");
const router = Router();

router.post("/create", createUser);
router.put("/update", updateuser);
router.get("/get", getAllUser);
router.get("/find/:userId", findbyId);
router.delete("/delete/:userId", deleteUser);

module.exports = router;
