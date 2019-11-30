require("../models/food.model")
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Food = mongoose.model('Food');


router.get("/food-list/", (req, res) => {
    Food.find({})
        .then(data => {
            res.status(200).json({
                count: data.length,
                food: data.map(data => {
                    return {
                        id: data.id,
                        name: data.name,
                        price: data.price
                    }
                })
            });
        })
});

router.post("/food-add/", (req, res) => {
    var food = new Food(req.body);
    food.save((err, doc) => {
        if (!err) console.log("Food added succesfully");
        else console.log("Error", err);
    })
    res.json(food);
});

router.patch("/food-update/", (req, res) => {
    Food.findByIdAndUpdate(
        req.query.Id,
        {
            $set:{
                ...req.body
            }
        },
        {
            useFindAndModify: false
        },
        (err, food) => {

            if (err) return res.status(500).json(err);
            return res.json({
                id: food._id,
                message: "Food updated succuessfully"
            });
        }
    )
});

router.delete("/food-delete/", (req, res) => {

    Food.findByIdAndDelete(req.query.Id, (err, food) => {
        if (!food) return res.status(500).send({
            error: "Food not found"
        });

        return res.status(200).send({
            message: "Food successfully deleted",
            id: food._id
        });
    });

});

module.exports = router;
