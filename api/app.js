const express = require('express')
const app = express()
const morgan  = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

  const dataRoutes = require('./modules/routes/data.js')

 USERNAME = process.env.USER
 PASSWORD = process.env.PASSWORD

mongoose.connect(
  'mongodb+srv://admin:admin@mongopractice.4ujczly.mongodb.net/?retryWrites=true&w=majority'
).then(function (db) {
    console.clear();
    console.log("db connected");
    
  })
  .catch(function (error) {
    console.log("setup failed");
  });

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With, Content-Type , Accept, Authorization"
    );
  
    if (req.method === "OPTIONS") {
      res.header(
        "Acess-Control-Allow-Methods",
        "PUT, PATCH , DELET , POST , GET"
      );
      return res.status(200).json({});
    }
    next();
  });

  

   app.use('/data' , dataRoutes);

  //error handling
  app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
  
  module.exports = app;
