var mongoose = require("mongoose");

var GemSchema = new mongoose.Schema({
    type        : String,
    price       : Number,
    location    : String,
    floor       : String,
    img         : String,
    legendary   : {type: Boolean, default: false}
});

module.exports = mongoose.model("Gem", GemSchema);