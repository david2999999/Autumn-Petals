var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var WeatherSchema = new mongoose.Schema({
    type        : String,
    season      : String,
    img         : String,
    description : String
});


module.exports= mongoose.model("Weather", WeatherSchema);
