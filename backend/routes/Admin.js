const express = require("express");
const router = express.Router();
const controller = require("../controllers/AdminController")

router.post("/login",controller.login)
router.post("/register",controller.signup)




module.exports = router