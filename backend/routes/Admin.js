const express = require("express");
const router = express.Router();
const controller = require("../controllers/AdminController")

router.post("/login",controller.login)
router.post("/register",controller.signup)
router.post('/',controller.post)
router.put("/:id",controller.put)
router.delete("/:id",controller.delete)
router.get("/",controller.getAll)
router.get("/:id",controller.getbyId)





module.exports = router