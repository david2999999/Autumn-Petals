//when user clicked on the link of the items in item mall or the wiki, a Lightbox will be shown feturing the item and more information; 
/*global $*/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$caption.addClass("description");

$overlay.hide();
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);


$(".item_img a").click(function(event){
    event.preventDefault();
    console.log("click detected on a legenmdary tree");
    var href = $(this).children("img").attr("src");
    var description = $(this).siblings("p").text();
    console.log(description);
    
    $image.attr("src", href);
    $caption.text(description);
    $overlay.show();
    
});

$overlay.click(function(){
    $(this).hide();
});