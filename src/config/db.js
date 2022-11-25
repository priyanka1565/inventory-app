// connect database --6

// reuired mongoose --7

const mongoose = require("mongoose");

const url = process.env.URL


module.exports = () => {
    return mongoose.connect(url)
}