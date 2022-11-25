

const express = require("express");

const app = express();

const POART = 8080;

app.listen(POART, async() => {
    console.log("app is runing on the port 8080")
})