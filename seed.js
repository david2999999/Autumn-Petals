var mongoose = require("mongoose");
var Crop = require("./models/crop");
var Gallery = require("./models/gallery");
var Seed = require("./models/seed");

var galleryData = [
    {   img: "../Gallery/31.PNG"},
    {   img: "../Gallery/32.PNG"},
    {   img: "../Gallery/33.PNG"},
    {   img: "../Gallery/41.PNG"},
    {   img: "../Gallery/42.PNG"},
    {   img: "../Gallery/43.PNG"},
    {   img: "../Gallery/80.PNG"},
    {   img: "../Gallery/88.PNG"},
    {   img: "../Gallery/92.PNG"}
    
];

var seedData = [
    {   type: "Cuckoo Seed",
        price: 1000,
        img : "../Seed/1.PNG",
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season"
    },
    {   type: "Cuckoo Seed",
        price: 1000,

        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/2.PNG",
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/3.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/4.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/5.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/6.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/7.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/8.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/9.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/10.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/11.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/12.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/13.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/14.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/15.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/16.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/17.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/18.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/19.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/20.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/21.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/22.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/23.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/24.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/25.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/26.PNG"
        
    },
    {   type: "Cuckoo Seed",
        price: 1000,
        
        amountYield : 30,
        growTime    : "40 hours",
        season      : "All season",
        img : "../Seed/27.PNG"
        
    }
];

function seedDB(){
    Gallery.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            var counter = 0;
            galleryData.forEach(function(crop){
                Gallery.create(crop, function(err, crops){
                    if(err){
                        console.log(err);
                    } else{
                        counter+=1;
                        console.log(counter + " images have been added to Gallery");
                    }    
                });
            });
        }
    });
    Seed.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed contents in seedDB.");
            
            var counter = 0;
            seedData.forEach(function(crop){
                Seed.create(crop, function(err, crops){
                    if(err){
                        console.log(err);
                    } else{
                        counter+=1;
                        console.log(counter + " images have been added to Seed");
                    }    
                });
            });
            
        }
    });
}


module.exports = seedDB;