var mongoose = require("mongoose");
var Crop = require("./models/crop");

var data = [
    {
        name: "Strawberry",
        price: 100,
        quantity: 10,
        growTime: "2 days",
        season: "Spring",
        img: "../image/3.PNG"
    },
    {
        name: "Strawberry",
        price: 200,
        quantity: 10,
        growTime: "2 days",
        season: "Spring",
        img: "../image/3.PNG"
    },
    {
        name: "Cherry",
        price: 200,
        quantity: 10,
        growTime: "2 days",
        season: "Spring",
        img: "../image/3.PNG"
    }
]

function seedDB(){
    Crop.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("removed Crops");
                data.forEach(function(crop){
                    Crop.create(crop, function(err, crops){
                        if(err){
                          console.log(err);
                        } else{
                            console.log("added a crop")
                        }    
                    });
                });
        }
    });
}


module.exports = seedDB;