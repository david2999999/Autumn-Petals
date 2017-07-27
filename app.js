var express         = require("express"),       // used to run the whole applications
    app             = express(),
    bodyParser      = require("body-parser"),   // allows access to data in websites
    mongoose        = require("mongoose"),      // allows connection to the MongoDB database and also make the mongoose Schema
    passport        = require("passport"),      // allows user authentications
    flash           = require("connect-flash"), // allows flash messages such as when the user logs in or log out
    LocalStrategy   = require("passport-local"),// authenticates username and password
    methodOverride  = require("method-override"),// used with restful routing
    nodemailer      = require("nodemailer"),    // used for emailing, such as forget password
    async           = require("async"),         // used with nodemailer for password reset
    crypto          = require("crypto"),        // encoding data such as the password
    //All of the Schema Models
    Animal          = require("./models/animal"),
    Insect          = require("./models/insect"),
    Tree            = require("./models/tree"),
    Seed            = require("./models/seed"),
    User            = require("./models/user"),
    Pet             = require("./models/pet"),
    Gem             = require("./models/gem"),
    Fish            = require("./models/fish"),
    Weather         = require("./models/weather"),
    Crop            = require("./models/crop");
    
    // seedDB       = require("./seed");
    
// console.log(process.env.DATABASEURL);
mongoose.Promise = global.Promise;  // prevent a warning message from mongoose
mongoose.connect(process.env.DATABASEURL);// DATABASE HERE,THIS IS HEROKU/MONGOLAB DATABASE
// mongoose.connect("mongodb://localhost/autumn-petals"); // C9 mongoDB, WHEN EDITING USE THIS ONE

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
    Fish.find({}, function(err, fish){
        if(err){
            console.log(err);
        }else{
            res.render("Nav_Fishing", {fishs: fish});
        }
    });    
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
app.get("/announce/server", function(req, res){
    res.render("Nav_Server_Status");
});

/////////////////
// MEDIA ROUTES//
////////////////
app.get("/media", function(req, res) {
   res.render("Nav_Media_Gallery"); 
});

app.get("/media/gallery", function(req, res) {
    res.render("Nav_Media_Gallery"); 
});

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

// Handling login logic
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

//FORGOT PASSWORD ROUTE
app.get('/forgot', function(req, res) {
  res.render('Forgot');
});

app.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'pkmgo52@gmail.com',
          pass: process.env.GMAILPW
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'pkmgo52@gmail.com',
        subject: 'Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});

app.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('Reset', {token: req.params.token});
  });
});

app.post('/reset/:token', function(req, res) {
    async.waterfall([
        function(done) {
              User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
                    if (!user) {
                          req.flash('error', 'Password reset token is invalid or has expired.');
                          return res.redirect('back');
                    }
                    if(req.body.password === req.body.confirm) {
                         user.setPassword(req.body.password, function(err) {
                            user.resetPasswordToken = undefined;
                            user.resetPasswordExpires = undefined;
            
                        user.save(function(err) {
                          req.logIn(user, function(err) {
                            done(err, user);
                          });
                        });
                      });
                    } else {
                        req.flash("error", "Passwords do not match.");
                        return res.redirect('back');
                }
          });
    },
    function(user, done) {
          var smtpTransport = nodemailer.createTransport({
            service: 'Gmail', 
            auth: {
                  user: 'pkmgo52@gmail.com',
                  pass: process.env.GMAILPW
        }
    });
      var mailOptions = {
            to: user.email,
            from: 'pkmgo52@gmail.com',
            subject: 'Your password has been changed',
            text: 'Hello,\n\n' +
              'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
          };
          smtpTransport.sendMail(mailOptions, function(err) {
                req.flash('success', 'Success! Your password has been changed.');
                done(err);
             });
            }
          ], function(err) {
            res.redirect('/');
      });
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

        
    
    
    