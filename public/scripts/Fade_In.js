/*global $*/


$('#footer').css('display', 'none');
$('.content3').css('display', 'none');
$('.content2').css('display', 'none');

$(document).ready(function(){
    $('.content3').fadeIn('slow');
    $('.content2').fadeIn('slow');
    $('#footer').fadeIn('slow');

});


setTimeout(function(){
    $('.content3').fadeIn();
    $('.content2').fadeIn();
    $('#footer').fadeIn();
}, 1000)


