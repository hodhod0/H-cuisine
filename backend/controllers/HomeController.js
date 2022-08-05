const Model = require("../models/HomeModel");

class Controller {
  getAll(req, res, next) {
    Model.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send({
        success: true,
        response,
      });
    });
  }

  getbyId(req, res, next) {
    let { id } = req.params;
    Model.findOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({
        success: true,
        response,
      });
    });
  }
  async post(req, res, next) {
    const reqFiles = [];
    const url = req.protocol + "://" + req.get("host");
    for (var i = 0; i < req.files.length; i++) {
      reqFiles.push(url + "/images/" + req.files[i].filename);
    }

    console.log("category ", req.body);
    let newCategory = new Model({
        content: req.body.content,
        image: reqFiles,
    });
    newCategory.save({}, (error, result) => {
      if (error) return next(error);
      res.send(result);
      console.log("res ", result);
    });
  }


//   post(req, res, next) {
//     let body = req.body;
//     let doc = new Model(body);
//     doc.save((err, response) => {
//       if (err) return next(err);
//       res.status(200).send({
//         success: true,
//         response,
//       });
//     });
//   }

  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    Model.updateOne(
      { _id: id },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send({
          success: true,
          response,
        });
      }
    );
  }

  delete(req, res, next) {
    let { id } = req.params;
    Model.findByIdAndDelete({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send({
        success: true,
        response,
      });
    });
  }
}

const controller = new Controller();
module.exports = controller;
