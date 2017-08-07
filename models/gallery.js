/*global Schema*/

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var GallerySchema = new mongoose.Schema({
    img : String
});

module.exports = mongoose.model("Gallery", GallerySchema);