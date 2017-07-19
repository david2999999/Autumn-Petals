var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var TreeSchema = new mongoose.Schema({
    name        : String,
    price       : Number,
    quantity    : Number,
    growTime    : String,
    season      : String,
    legendary   : {type: Boolean, default: false},
    img         : String
});


module.exports= mongoose.model("Tree", TreeSchema);