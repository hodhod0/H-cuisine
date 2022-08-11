const express = require("express");
const router = express.Router();
const controller = require("../controllers/OrderController");
const { authenticate } = require("../middelwar/auth");

router.post("/", controller.createOrder);
router.get("/", controller.getOrder);
// router.get("/:id",controller.get);
// router.delete("/:id", controller.delete);

module.exports = router;
