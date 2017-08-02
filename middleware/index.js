// ALL THE MIDDLEWARE GOES HERE
var middlewareObject={};

// MIDDLEWARE
middlewareObject.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to log in first!");
    res.redirect("/login");
}


module.exports = middlewareObject;