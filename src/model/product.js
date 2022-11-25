// create a model --8

const mongoose = require("mongoose");

// create a schema model

const Product_schema = new mongoose.Schema({
    Product_name: {
        type: "String",
        required:"true",
    },
    Product_price: {
        type: "Number",
        required:"true",
    },
    Product_img: {
        type: "String",
        required:"true",
    }
})

//connect database...


// module send to the contoller

module.exports = mongoose.model("Product",Product_schema)