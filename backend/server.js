require("./models/db");
const express = require("express");
const bodyParser = require('body-parser');
const foodController = require("./controllers/foodController");

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded(
    { extended: true }
)); // support encoded bodies

app.listen(8000, ()=> {
    console.log("server is running");
})

app.use("/ai/v1/food", foodController);
