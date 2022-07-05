const express = require("express");
const router = express.Router();
var controller = require("../controllers/itemController");
const multer = require("multer")
const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb ) =>{
        cb(null, "./images" )
    },
    filename: (req, file, cb) =>{
        cb(null,Date.now() + "--" + file.originalname)
    }
});
const upload = multer({storage: fileStorageEngine})

router.get("/", controller.getAllItems);
router.post("/", controller.addItem);
router.get("/:id", controller.getItemById);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);
router.post("/single",upload.single("image"), (req,res)=>{
    console.log(req.file)
    res.send("Single file upload")
})
router.post("/multiple",upload.array("images", 3), (req,res)=>{
    console.log(req.files)
    res.send("multiple images")
})



module.exports = router;
