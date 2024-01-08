const express = require("express");
const router = express.Router();


const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const {
  createNewUser,
  fetchCurrentUser,
  loginUser,
  verifyOTP,
  handleAdmin
} = require("../controllers/auth.controller");

router.post("/createNewUser", createNewUser)

router.post("/login_with_phone", loginUser);

router.post("/verify", verifyOTP);

router.get("/me", checkAuth, fetchCurrentUser);

router.get("/admin", checkAuth, checkAdmin, handleAdmin);

module.exports = router;