$(document).ready(function() {

    $("#aboutbutton").click(function(){
        click();
        setTimeout(() => $(".aboutme").fadeIn(500), 500);
        $("li:not(#aboutbutton)").removeClass("selected");
        $(this).toggleClass("selected");
    })

    $("#cvbutton").click(function(){
        click();

        setTimeout(() => $(".cv").fadeIn(500), 500);
        $("li:not(#cvbutton)").removeClass("selected");
        $(this).addClass("selected");
    })

    $("#contactbutton").click(function(){
        click();

        setTimeout(() => $(".contact").fadeIn(500), 500);
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