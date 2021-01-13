$(document).ready(function() {

    $("#aboutbutton").click(function(){
        click();

        $("li:not(#aboutbutton)").removeClass("selected");
        $(this).toggleClass("selected");
    })

    $("#cvbutton").click(function(){
        click();

        $("li:not(#cvbutton)").removeClass("selected");
        $(this).addClass("selected");
    })

    $("#contactbutton").click(function(){
        click();

        $("li:not(#contactbutton)").removeClass("selected");
        $(this).toggleClass("selected");
    })
})

function click() {
    $(".landingpage").fadeOut(500);
    $(".aboutme").fadeOut(500);
    $(".cv").fadeOut(500);
    $(".contact").fadeOut(500);
}