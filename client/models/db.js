const moongose = require('mongoose');
moongose.connect('mongodb://localhost:27017/RestaurantDB', {
        useNewURLParser: true
    },
    error => {
        if (!error) console.log("mongodb conncetion success");
        else console.log("mongodb conncetion error",error);
    }
)

require("./food.model")