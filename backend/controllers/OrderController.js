const Model = require("../models/OrderModel");

class Controller {
  getOrder = (req, res, next) => {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    }).populate("item.id");
  };
  getOrderById = (req, res, next) => {
    let { id } = req.params || {};
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  };
  getOrderByUserId = (req, res, next) => {
    let { id } = req.params || {};
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({ success: true, response });
    });
  };
  createOrder = (req, res, next) => {
    let { user, item } = req.body;
    let newOrder = new Model({
      user: req.body.user,
      item: req.body.item,
    });
    newOrder.save({}, (error, result) => {
      if (error) return next("er", error);
      res.send(result);
      console.log("res ", result);
    });
  };
}

const controller = new Controller();
module.exports = controller;
