const Model = require("../models/OrderModel");
const userModel = require("../models/UserModel");

const user = require("./UserController");
class Controller {
  getOrder = (req, res, next) => {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      const result = [];
      response &&
        response.forEach((element, index) => {
          userModel.findOne({ _id: element["user"] }, (err, ress) => {
            result.push({
              createdAt: element.createdAt,
              user: ress,
              totalPrice: element.totalPrice,
              item: element.item,
              id: element._id,
            });
            console.log(index);
            if (response.length === index + 1) {
              res.status(200).send({ success: true, result });
            }
          });
        });
    });
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
    let { user, item, totalPrice } = req.body;
    console.log(req.body);
    let newOrder = new Model({
      user: user,
      item: item,
      date: user.date,
      totalPrice: totalPrice,
      address: user.address,
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
