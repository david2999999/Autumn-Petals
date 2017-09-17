var mongoose = require("mongoose");
var Crop = require("./models/crop");
var Gallery = require("./models/gallery");
var Seed = require("./models/seed");
var Animal = require("./models/animal");
var Gem = require("./models/gem");

var gemData = [
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/46.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/4.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/48.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/49.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/50.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/51.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/52.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/53.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/54.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/55.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/56.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/57.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/58.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/59.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/60.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/61.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/62.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/63.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/64.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/65.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/66.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/67.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/68.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/69.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/70.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/71.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/72.PNG",
    } ,
    {
        type:       "Cuckoo",
        price:      5000,
        location:   "The pit of amber",
        floor:      "Level 3: Labyrinth of Crystals",
        img:        "/Gem/73.PNG",
    } 
];

var cropData = [
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/1.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/2.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/3.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/4.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/5.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/6.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/7.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/8.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/9.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/10.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/11.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/12.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/13.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/14.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/15.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/16.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/17.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/18.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/19.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/21.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/22.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/23.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/24.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/25.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/26.PNG"
    },
    {
        name        : "Cuckoo",
        price       : 1000,
        quantity    : 50,
        growTime    : "50 hours",
        season      : "All season",
        img         : "../image/27.PNG"
    }
    
];

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

var animalData = [
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/24.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/25.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/26.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/27.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/28.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/29.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/30.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/34.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/35.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/36.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/37.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/38.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/39.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/40.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/44.PNG"
    },
    {
        type: "Cuckoo",
        price: 4000,
        growTime: "50 hours",
        stages: 1,
        img: "/Animal/45.PNG"
    }
];

var insertData = function(dataModel, dataSet, modelName){
    dataModel.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log(modelName + " has been cleared.");
            
            var counter = 0;
            dataSet.forEach(function(data){
                dataModel.create(data, function(err){
                    if(err) {
                        console.log(err);
                    } else {
                        counter+=1;
                        console.log(counter + " instance have been added to " + modelName);
                    }
                });
            });
        }
    });
};


function seedDB(){
    insertData(Gallery, galleryData, "Gallery");
    insertData(Seed, seedData, "Seed");
    insertData(Crop, cropData, "Crop");
    insertData(Animal, animalData, "Animal");
    insertData(Gem, gemData, "Gem");
    
}


module.exports = seedDB;