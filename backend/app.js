var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config();



//Import Routes

var userRouter = require("./routes/User")

//Connection to mongoDB
// conncet to mongodb
const mongoAtlasUri = process.env.MONGO_DB;


try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

//Meddlewar
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/users', userRouter);

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
      success: false,
      message: err.message
  });
});

module.exports = app;