var mongoose = require("mongoose");
var Crop = require("./models/crop");
var Gallery = require("./models/mediaGallery");

var data = [
    {   img : "../Gallery/80.PNG"},
    {   img : "../Gallery/76.PNG"},
    {   img : "../Gallery/74.PNG"},
    {   img : "../Gallery/77.PNG"},
    {   img : "../Gallery/92.PNG"},
    {   img : "../Gallery/88.PNG"},
    {   img : "../Gallery/31.PNG"},
    {   img : "../Gallery/42.PNG"},
    {   img : "../Gallery/43.PNG"},
    {   img : "../Gallery/41.PNG"},
    {   img : "../Gallery/32.PNG"},
    {   img : "../Gallery/33.PNG"},
    // {   img : "../Gallery/88.PNG"},
    // {   img : "../Gallery/88.PNG"},
    // {   img : "../Gallery/88.PNG"},
    // {   img : "../Gallery/88.PNG"},

]

function seedDB(){
    Gallery.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed seedDB contents (iamges)");
            
            var counter = 0;
            data.forEach(function(crop){
                Gallery.create(crop, function(err, crops){         
                    if(err){
                        console.log(err);
                    } else{
                        counter+=1;
                        console.log(counter + " images have been added");
                    }    
                });
            });
            
        }
    });
}


module.exports = seedDB;