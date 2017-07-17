var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var CropSchema = new mongoose.Schema({
    name        : String,
    price       : Number,
    quantity    : Number,
    growTime    : Number,
    season      : String,
    tree        : Boolean,
    legendary   : Boolean
});


module.exports= mongoose.model("Crop", CropSchema);

