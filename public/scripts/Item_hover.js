//when the player hovers the mouse over an item in the item mall, a window will appear showing more specific information about the item.
/*global $*/

//display a window when mouse is hovering over an item.
$(".item_content_list").hover(function(){
    $(this).children(".information").stop().fadeIn(300);
    
    
    
}, function(){
    $(this).children(".information").stop().fadeOut(100);
});