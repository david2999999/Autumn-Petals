var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var WeatherSchema = new mongoose.Schema({
    name        : String,
    season      : String,
    img         : String
});


module.exports= mongoose.model("Weather", WeatherSchema);
