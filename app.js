var express         = require("express"),       // used to run the whole applications
    app             = express(),
    bodyParser      = require("body-parser"),   // allows access to data in websites
    mongoose        = require("mongoose"),      // allows connection to the MongoDB database and also make the mongoose Schema
    passport        = require("passport"),      // allows user authentications
    flash           = require("connect-flash"), // allows flash messages such as when the user logs in or log out
    LocalStrategy   = require("passport-local"),// authenticates username and password
    methodOverride  = require("method-override"),// used with restful routing
    // nodemailer      = require("nodemailer"),    // used for emailing, such as forget password
    async           = require("async"),
    crypto          = require("crypto"),        // encoding data such as the password
    //All of the Schemas
    Animal          = require("./models/animal"),
    Insect          = require("./models/insect"),
    Tree            = require("./models/tree"),
    Seed            = require("./models/seed"),
    User            = require("./models/user"),
    Pet             = require("./models/pet"),
    Gem             = require("./models/gem"),
    Weather         = require("./models/weather"),
    Crop            = require("./models/crop");
    // seedDB          = require("./seed");
    
console.log(process.env.DATABASEURL);
mongoose.Promise = global.Promise;  // prevent a warning message
// mongoose.connect(process.env.DATABASEURL);// DATABASE HERE
mongoose.connect("mongodb://David:206086290@ds163232.mlab.com:63232/autumn-petals");// DATABASE HERE

// mongodb://localhost/autumn-petals
//body parser allows to see the element value from the form
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); // does not need to include ejs extension
app.use(express.static(__dirname + "/public")); // uses the css stylesheet
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATIONS
app.use(require("express-session")({
    secret: "Once again, Hello",
    resave: false,
    saveUninitialized: false
}));

app.use(flash()); // used for flash messages. you will need express-session too

// AUTHENTICATION INITIALIZERS
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Add the user to every single template
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");           // use for the flash message for error
  res.locals.success = req.flash("success");       // use for the flash message for success
  next();
});


// MAIN PAGE
app.get("/", function(req, res){
    res.render("Main_Page");
});

////////////////////
// ITEM MALL ROUTE//
////////////////////
app.get("/item-mall", function(req, res){
    res.render("Nav_Seeds");
});
app.get("/item-mall/seeds", function(req, res){
    res.render("Nav_Seeds");
});
app.get("/item-mall/trees", function(req, res){
    res.render("Nav_Legendary_Trees");
});
app.get("/item-mall/animals", function(req, res){
    res.render("Nav_Animals");
});
app.get("/item-mall/pets", function(req, res){
    Pet.find({}, function(err, pets){
        if(err){
            console.log(err);
        }else{
            res.render("Nav_Pets", {pets: pets});
        }
    });
    
});
// app.get("/item-mall/upgrades", function(req, res){
//     res.render("Nav_Upgrades");
// });
// app.get("/item-mall/expansion", function(req, res){
//     res.render("Nav_Expansion");
// });
app.get("/item-mall/gem", function(req, res){
    res.render("Nav_Gems");
});
// app.get("/item-mall/expboost", function(req, res){
//     res.render("Nav_ExpBoost");
// });



////////////////////
// THE GAME ROUTE //
////////////////////
app.get("/game", function(req, res){
    Crop.find({}, function(err, crops){
        if(err){
            console.log(err);
        }else{
            res.render("Nav_Crops", {crops: crops});
        }
    });
});
app.get("/game/crops", function(req, res){
    Crop.find({}, function(err, crops){
       if(err){
           console.log(err);
       } else{
           res.render("Nav_Crops", {crops, crops});
       }
    });
});
app.get("/game/weather", function(req, res){
    res.render("Nav_Game_Weather");
});
app.get("/game/fishing", function(req, res){
    res.render("Nav_Fishing");
});
app.get("/game/mining", function(req, res){
    res.render("Nav_Game_Mining");
});
app.get("/game/insect-hunting", function(req, res){
    res.render("Nav_Insect");
});
// app.get("/game/stamina", function(req, res){
//     res.render("Nav_Stamina");
// });
app.get("/game/contest", function(req, res){
    res.render("Nav_Contest");
});

////////////////////
// THE NEWS ROUTE //
////////////////////
app.get("/announce", function(req, res){
    res.render("Nav_News");
});
app.get("/announce/news", function(req, res){
    res.render("Nav_News");
});
app.get("/announce/game-update", function(req, res){
    res.render("Nav_Updates");
});
app.get("/announce/patch-notes", function(req, res){
    res.render("Nav_Patch");
});
app.get("/announce/events", function(req, res){
    res.render("Nav_Event");
});
app.get("/announce/maintenance", function(req, res){
    res.render("Nav_Maintenance");
});
// app.get("/announce/server", function(req, res){
//     res.render("Nav_Server_Status");
// });



//////////////////////////
// AUTHENTICATION ROUTES//
//////////////////////////
// shows the register form
app.get("/register", function(req, res) {
   res.render("Register",{page: "Register"}) ;
});

// handles register logic
app.post("/register", function(req, res){
    var newUser = new User(
        {
            username: req.body.username,
            email: req.body.email
        });
        
        User.register(newUser, req.body.password, function(err, user){
           if(err){
                return res.render("Register", {error: err.message});
           } 
           
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Autumn Petals " + user.username);
            res.redirect("/");
        });
    });
});

//shows the login page
app.get("/login", function(req, res) {
    res.render("Login", {page: "Register"});
});

// Handling log in logic
app.post("/login", passport.authenticate("local",
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }),function(req, res){
});


// logout route
app.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged out successfully. Hope to see you soon!");
    res.redirect("/");
});


////////////////////
// RUNS THE SERVER//
////////////////////
app.listen(process.env.PORT , process.env.IP, function(){
    console.log("Autumn Petals has Started");
});




    
    
//name      url         verb    description
//============================================
//Index     /dogs       GET     Display a list of all dogs
//New       /dogs/new   GET     Displays form for a new dog
//Create    /dogs       POST    Add new dog to DB
//Show      /dogs/:id   GET     Shows input of one dog


//INDEX     /campgrounds    
//NEW       /campgrounds/new
//CREATE    /campgrounds
//SHOW      /campgrounds/:id

//NEW       /campgrounds/:id/comments/new   GET
//CREATE    /campgrounds/:id/comments       POST

        
    
    
    