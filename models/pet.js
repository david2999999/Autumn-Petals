var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var PetSchema = new mongoose.Schema({
    type    : String,
    name    : String,
    price   : Number,
    quantity: Number,
    img     : String
});


module.exports = mongoose.model("Pet", PetSchema);