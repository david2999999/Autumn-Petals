var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var AnimalSchema = new mongoose.Schema({
    type        : String,
    price       : Number,
    quantity    : Number,
    growTime    : String,
    stages      : Number,
    legendary   : {type: Boolean, default: false},
    img         : String
});


module.exports= mongoose.model("Animal", AnimalSchema);