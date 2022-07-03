const express = require("express");
const router = express.Router();
var controller = require("../controllers/itemController");

router.get("/", controller.getAllItems);
router.post("/", controller.addItem);
router.get("/:id", controller.getItemById);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);


module.exports = router;
