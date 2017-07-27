/*When the user clicked on the login or sign up button,
    a window will appear containing the login form.*/

/*global $*/

console.log("ModalLogin is loaded");
var $overlay = $('<div id="overlay"></div>');

var $signupForm =$(`<div id="form-container">
                    <h1 id="Header">Sign Up</h1>
                        <form action="/register" method="post">
                            <div class="inputWrapper">
                                <i class="fa fa-user-circle" aria-hidden="true"></i><input class="form-control" type="text" name="username" placeholder="Username" required="true">
                            </div> 
                             <div class="inputWrapper">
                                <i class="fa fa-key" aria-hidden="true"></i><input class="form-control" type="password" name="password" placeholder="Password" required="true">
                            </div>          
                            <div class="inputWrapper">
                                <i class="fa fa-envelope" aria-hidden="true"></i><input class="form-control" type="email" name="email" placeholder="Email" required="true">
                            </div>
                             <div class="form-group">
                                <button class="btn">Register</button>
                            </div> 
                        </form>
                    <a id="goBack" class="links" href="/">Go Back</a><br>
                </div>`);

var $loginForm = $(`<div id="form-container">
                            <h1 id="Header">User Log In</h1>
                        
                            <form action="/login" method="post">
                                <div class="inputWrapper">
                                    <i class="fa fa-user-circle" aria-hidden="true"></i><input class="form-control" type="text" name="username" placeholder="Username" required="true">
                                </div>
                                <div class="inputWrapper">
                                    <i class="fa fa-key" aria-hidden="true"></i><input class="form-control" type="password" name="password" placeholder="Password" required="true">
                                </div>
                                
                                    <button class="btn">Log In</button>
                                
                            </form>
                        <div class="linksWrapper">
                            <a id="goBack" class="links" href="/">Go Back</a>
                            <a class="links" href="/forgot">Forgot Password</a>
                        </div>
                    </div>`);

$overlay.hide();
$("body").append($overlay);

document.getElementById("loginButton").addEventListener("click", function(event){
    //console.log("click detected on loginButton");
    event.preventDefault();     //prevent the default action of clicking on a link
    //console.log("default link behavior prevented");
    $overlay.append($loginForm);
    $overlay.show();
    
    if(document.getElementById("goBack") != null){
        document.getElementById("goBack").addEventListener("click", function(event){
            event.preventDefault();
            $overlay.hide();
            $loginForm.detach();
        });
    } else {
        console.log("The element by id goBack does not exist");
    }
});

document.getElementById("signupButton").addEventListener("click", function(event){
    //console.log("click detected on loginButton");
    event.preventDefault();     //prevent the default action of clicking on a link
    //console.log("default link behavior prevented");
    $overlay.append($signupForm);
    $overlay.show();
    
    if(document.getElementById("goBack") != null){
        document.getElementById("goBack").addEventListener("click", function(event){
            event.preventDefault();
            $overlay.hide();
            $signupForm.detach();
        });
    } else {
        console.log("The element by id goBack does not exist");
    }
});

