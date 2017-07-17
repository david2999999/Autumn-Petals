var mongoose = require("mongoose");

var GemSchema = new mongoose.Schema({
    type: String,
    price: String,
    location: String
});

module.exports = mongoose.model("Gem", GemSchema);