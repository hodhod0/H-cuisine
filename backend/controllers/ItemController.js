const { response } = require("express");
const Item = require("../models/ItemModel");

class Controller{
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
        addItem = async(req,res,next)=>{
            let body = req.body;
            let doc = await new Item(body);
            doc.save((err,response)=>{
                if(err) return next(err);
                res.status(200).send({success:true,response});
            });
        }

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