var mongoose = require("mongoose");

var InsectSchema = new mongoose.Schema({
    type: String,
    location: String,
    img: String,
    legendary: {type: Boolean, default: false}
});

module.exports = mongoose.model("Insect", InsectSchema);