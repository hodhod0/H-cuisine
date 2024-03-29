const express = require("express")
router = express.Router();
const controller = require("../controllers/HomeController")
const { authenticate } = require("../middelwar/auth");
var multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const DIR = "./public/images";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, uuidv4() + "-" + fileName);
    },
  });
  
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jfalsepg and .jpeg format allowed!"));
      }
    },
  });

router.get("/",controller.getAll)
router.get("/:id",controller.getbyId)
router.delete("/:id",controller.delete)
router.put("/:id",controller.put)
// router.post("/",controller.post)
router.post("/upload", upload.array("images", 10),controller.post);



module.exports = router;