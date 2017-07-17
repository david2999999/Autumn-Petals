var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var AnimalSchema = new mongoose.Schema({
    type: String,
    name: String,
    price: String,
    quantity: Number
});


module.exports = mongoose.model("Animal", AnimalSchema);