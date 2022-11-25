
const express = require("express");


//get Model

const product = require("../model/product");
const router = express.Router;

//Post Request

router.post("/add", async (req, res) => {
  try {
    // crete a new product ;
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});

// get request

router.get("/get", async (req, res) => {
  try { 
    const product = await Product.find();
    res.send(product);
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;



