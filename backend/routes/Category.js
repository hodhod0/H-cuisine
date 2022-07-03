const express = require("express");
const router = express.Router();
const controller = require("../controllers/CategoryController");

router.post("/", controller.post);
router.put("/:id",controller.put);
router.get("/",controller.getAll);
router.get("/:id",controller.get);
router.delete("/:id", controller.delete);


module.exports = router