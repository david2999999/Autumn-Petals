/*global $*/

//Default page number is 1
var currentPage = 1;
//$('.page1').parent().addClass("active disabled");
/*
//Hide all items upon first load
var hideAll = function(){$('.grid-item').addClass('hideMe')};

var showPage = function(currentPage) {
    //display only a numbers of the images
    for(var i = (currentPage-1)*6+1; i < currentPage*6 + 1; i++){
        console.log("Unhiding image" + i);
        $(".grid div:nth-child(" + i + ")").removeClass("hideMe");
    }
}*/
//refresh masronry.js after switching pages
var refreshMasonry = function(){

        var $grid = $('.grid');
            $grid.masonry({
                // options...
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                columnCount: 2,
                transition: 0,
                percentPosition: true
            });
            console.log("MasonryJs is refreshed");
};

//hideAll();
//showPage(currentPage);

//When the user clicked on a page number, remove active & disable class from currentPage
//Then append active and disable class onto that page number
/*$(".pagination a").click(function(event){
    event.preventDefault();
    var n = currentPage + 1;
    $(".pagination li").each(function(){$(this).removeClass("active disabled");});
    
    //console.log("removed active & disable class from page" + currentPage);
    var $this = $(this);
    var pageNumber = $this.attr("data-page");
    if(!($this.hasClass("nochange")))
    {
        //console.log("This is neither the first nor last child of pagination")
        var listElement = $this.parent();
        listElement.addClass("active disabled");   //append active & disable class
        console.log("added class attr to " + listElement);
        currentPage = pageNumber;               //update the currentPage
        console.log("currentPage = " + currentPage);
        hideAll();
        console.log("All images hidden");
        
        showPage(currentPage);
        refreshMasonry();
    }
    
    
});*/

