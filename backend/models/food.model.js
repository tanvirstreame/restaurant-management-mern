const mongoose = require('mongoose');

var foodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },

})

mongoose.model('Food', foodSchema);