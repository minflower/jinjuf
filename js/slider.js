$(document).ready(function(){
    $(".slide ul li:nth-child(2)").hide();
    $(".slide ul li:nth-child(3)").hide();

setInterval(function() {
    $(".slide ul li").delay(2000);
    $("slide ul li:nth-child(1)").fadeout();
    $("slide ul li:nth-child(2)").fadein();

    $(".slide ul li").delay(2000);
    $("slide ul li:nth-child(2)").fadeout();
    $("slide ul li:nth-child(3)").fadein();

    $(".slide ul li").delay(2000);
    $("slide ul li:nth-child(3)").fadeout();
    $("slide ul li:nth-child(1)").fadein();

});

});
