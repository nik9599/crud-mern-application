const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const data = require("../skema/user.js");

//get request routes

router.get("/", async (req, res, next) => {
  const Data = await data.find();

  res.status(200).json(Data);
});

// adding data request

router.post("/", (req, res, next) => {
  const product = new data({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  product
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Created succesfully",
        createdProduct: {
          name: result.name,
          email: result.email,
          password: result.password,
          id: result._id,
          response: {
            type: "POST",
            //   url : 'http://localhost:3000/products/'+result._idapi
          },
        },
      });
    })
    .catch((error) => console.log(error));
});

// delet saved data

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  data.findByIdAndDelete({ _id: id }).then((result) => {
    res.status(200).json({
      Boolean: true,
      message: "deleted",
    });
  });
});

// find data with particular id

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  data.findById(id).then((result) => {
    res.status(200).json(result);
  });
});

  // updating the previous data

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const newData ={
    name : req.body.name,
    email: req.body.email,
    password : req.body.passsword
  }   
  data
    .findByIdAndUpdate({ _id: id } , {$set : newData})
    .then(() => {
      res.status(200).json({
        message: "value updated",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});
module.exports = router;
