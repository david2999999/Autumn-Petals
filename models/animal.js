var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var AnimalSchema = new mongoose.Schema({
    name        : String,
    price       : Number,
    quantity    : Number,
    growTime    : String,
    season      : String,
    tree        : {type: Boolean, default: false},
    legendary   : {type: Boolean, default: false},
    img         : String
});


module.exports= mongoose.model("Animal", AnimalSchema);