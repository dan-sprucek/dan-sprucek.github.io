// NAVBAR FIRST OPTION LEFT BORDER
$("#navigationBarList li a").first().css("border-left", "1px solid white");

// DECIDING WHETHER TO USE CURRENT LEARNIGN + RANDOM QUOTE
$(window).on("load resize", function(){
    if ($(window).width() < 1000){
        $("#randomQuote, #currentlyLearning").css("display", "none");
}   else {
        $("#randomQuote, #currentlyLearning").css("display", "inline");
}
});

// NAVBAR SLIDE OPTIONS
$("#navigationBarList li").hover(function(){
    $(this).children("ul").stop(true, false, true).slideToggle(300)
});

// FIRST TAB SHOWS ON LOAD
$(".mainContainer").first().addClass("active");

// CLICKING NAVIGATION OPTIONS
$("#navigationBarList li a").on("click", function(){
    $(".mainContainer").removeClass("active");
    // FIGURE OUT WHY INSTEAD OF eq($("#navigationBarList li a").index(this)) THIS CANNOT BE USED eq($(this).index())
    $(".mainContainer").eq($("#navigationBarList li a").index(this)).addClass("active");
});

// DOWNLOAD CV DEFAULT SELECTOR
// $("#selectCV div").filter(":eq(0), :eq(2)").addClass("CVselected");

$("#selectCV div").filter(":eq(0), :eq(2)").addClass("CVselected");

// DOWNLOAD CV SELECT
// DOESN'T MAKE SENSE WHY THIS DOES NOT WORK :()
$("#selectCV div").on("click", function(){
    if ($(this).hasClass("CVselected")){
        alert("error");
    } else if ($(this).index() < 2) {
        $("#selectCV div").eq(0).toggleClass("CVselected");
        $("#selectCV div").eq(1).toggleClass("CVSelected");
    } else {
        $("#selectCV div").eq(2).toggleClass("CVSelected");
        $("#selectCV div").eq(3).toggleClass("CVSelected");
    }
})

// SOLVE MARGIN WHEN SCREEN IS SMALLER