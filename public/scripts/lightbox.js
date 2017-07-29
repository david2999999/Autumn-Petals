//when user clicked on the link of the items in item mall or the wiki, a Lightbox will be shown feturing the item and more information; 
/*global $*/

var $galleryOverlay = $('<div id="galleryOverlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$caption.addClass("description");

$galleryOverlay.hide();
$galleryOverlay.append($image);
$galleryOverlay.append($caption);
$("body").append($galleryOverlay);


$(".item_img a").click(function(event){
    event.preventDefault();
    console.log("click detected on a legenmdary tree");
    var href = $(this).children("img").attr("src");
    var description = $(this).siblings("p").text();
    console.log(description);
    
    $image.attr("src", href);
    $caption.text(description);
    $galleryOverlay.show();
    
});

$galleryOverlay.click(function(){
    $(this).hide();
});