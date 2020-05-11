// NAVBAR FIRST OPTION LEFT BORDER
$("#navigationBarList li a").first().css("border-left", "1px solid white");

// NAVBAR SLIDE OPTIONS
$("#navigationBarList li").hover(function(){
    $(this).children("ul").stop(true, false, true).slideToggle(300)
});

// FIRST TAB SHOWS ON LOAD
$(".mainContainer").first().addClass("active");

// CLICKING NAVIGATION OPTIONS
$("#navigationBarList li a").on("click", function(){
    $(".mainContainer").removeClass("active");
    alert($("#navigationBarList li a").index(this));
    $(".mainContainer").eq($("#navigationBarList li a").index(this)).addClass("active");
});