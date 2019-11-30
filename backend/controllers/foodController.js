require("../models/food.model")
const  express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Food = mongoose.model('Food');


router.get("/food-list/", (req ,res)=> {
    Food.find({})
        .then(data=>{
            res.status(200).json({
                count: data.length,
                food: data.map(data=> {
                    return {
                        id: data.id,
                        name: data.name,
                        price: data.price
                    }
                })
            });
        })
});

router.post("/food-add/", (req ,res)=> {
    var food = new Food();
    food.name = req.body.name;
    food.price = req.body.price;
    food.save((err, doc)=> {
        if(!err) console.log("Food added succesfully");
        else console.log("Error",err);
    })
    res.json(food);
});

module.exports = router;
