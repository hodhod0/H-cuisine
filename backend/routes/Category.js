const express = require("express");
const router = express.Router();
const controller = require("../controllers/CategoryController");
const { authenticate } = require("../middelwar/auth");

router.post("/",authenticate, controller.post);
router.put("/:id",controller.put);
router.get("/",controller.getAll);
router.get("/:id",controller.get);
router.delete("/:id", controller.delete);
router.post("/upload", controller.upload.array("images", 6), controller.post);



module.exports = router