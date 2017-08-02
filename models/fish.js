var mongoose = require("mongoose");

var FishSchema = new mongoose.Schema({
    type        : String,
    location    : String,
    img         : String,
    rod         : String,
    legendary   : {type: Boolean, default: false}
});

module.exports = mongoose.model("Fish", FishSchema);