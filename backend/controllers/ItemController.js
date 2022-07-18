
const Model = require("../models/ItemModel")

class Controller{

  async post(req, res, next) {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/images/" + req.files[i].filename);
    }

    console.log("category ", req.body);
    let newItem = new Model({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: reqFiles,
        category: req.body.category,

    });
    newItem.save({}, (error, result) => {
      if (error) return next(error);
      res.send(result);
      console.log("res ", result);
    });
  }


        // Get All Currencies
        getAllItems(req,res,next){
            Item.find().populate("category").exec(function (err, result) {
              if (err) return next(err);
                res.send(result);
              });
            }
        // Get Currency By Id
        
        getItemById = (req, res, next) => {
            let { id } = req.params || {};
            Item.findOne({ _id: id }, (err, response) => {
              if (err) return next(err);
              res.status(200).send({ success: true, response });
            });
          };

        // Add New Currency
        // addItem = async(req,res,next)=>{
        //     let body = req.body;
        //     let doc = await new Item(body);
        //     doc.save((err,response)=>{
        //         if(err) return next(err);
        //         res.status(200).send({success:true,response});
        //     });
        // }

        // Edit The currency
        updateItem = (req,res,next)=>{
            let {id} = req.params || {};
            let body = req.body;
            Item.updateOne({_id:id},{$set:body},(err,response)=>{
                if(err) return next(err);
                res.status(200).send({success:true,response});
            });
        }

        // // Delete Currrency
        deleteItem = (req,res,next)=>{
            let {id} = req.params || {};
             Item.findByIdAndDelete({_id:id},(err,response)=>{
                if(err) return next(err);
                res.status(200).send({success:true,response});
            });
        }
}
const controller = new Controller();
module.exports = controller;