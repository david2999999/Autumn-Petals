/*global Schema*/

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var GallerySchema = new mongoose.Schema({
    img : String,
    pg : {type: String, default: "1"}
});

module.exports = mongoose.model("Gallery", GallerySchema);