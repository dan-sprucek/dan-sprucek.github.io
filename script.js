// PRE-DEFINED FUNCTIONS
// CLICK TO GET TO ANTOHER TAB
function showClickedTab(clickedTab){
    $(clickedTab).trigger("click");
};
// SELECT RANDOM NUMBER
function randomInteger(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min));
};

// NAVBAR FIRST OPTION LEFT BORDER
$("#navigationBarList li a").first().css("border-left", "1px solid white");

// DECIDING WHETHER TO USE CURRENT LEARNIGN + RANDOM QUOTE
$(window).on("load resize", function(){
    if ($(window).width() < 1020){
        $("#randomQuote, #currentlyLearning").css("display", "none");
}   else {
        $("#randomQuote, #currentlyLearning").css("display", "inline");
}
});

// NAVBAR SLIDE OPTIONS
$("#navigationBarList li").hover(function(){
    $(this).children("ul").stop(true, false, true).slideToggle(300)
});

// FIRST TAB SHOWS ON LOAD AND HIGHLIGHTS NAVBAR
$(".mainContainer").first().addClass("active");
$("#navigationBarList li a").eq($(".active").index() - 2).addClass("activeTab");

// CLICKING NAVIGATION OPTIONS
$("#navigationBarList li a").on("click", function(){
    $(".mainContainer").removeClass("active");
    $("#navigationBarList li a").removeClass("activeTab");
    $(".mainContainer").eq($("#navigationBarList li a").index(this)).addClass("active");
    $("#navigationBarList li a").eq($(".active").index() - 2).addClass("activeTab");
});

// DOWNLOAD CV DEFAULT SELECTOR
$("#selectCV div").filter(":eq(0), :eq(2)").addClass("CVselected");

// DOWNLOAD CV SELECT
// DOESN'T MAKE SENSE WHY THIS DOES NOT WORK :()
// $("#selectCV div").on("click", function(){
//     if ($(this).hasClass("CVselected")){
//         alert("error");
//     } else if ($(this).index() < 2) {
//         $("#selectCV div").eq(0).toggleClass("CVselected");
//         $("#selectCV div").eq(1).toggleClass("CVSelected");
//     } else {
//         $("#selectCV div").eq(2).toggleClass("CVSelected");
//         $("#selectCV div").eq(3).toggleClass("CVSelected");
//     }
// })

// DOWNLOAD CV SELECT
$("#selectCV div").on("click", function(){
    if ($(this).hasClass("CVselected")) {
    }   else if ($(this).index() == 0) {
        $(this).toggleClass("CVselected");
        $("#selectCV div").eq(1).toggleClass("CVselected");
    }   else if ($(this).index() == 1) {
        $(this).toggleClass("CVselected");
        $("#selectCV div").eq(0).toggleClass("CVselected");
    }   else if ($(this).index() == 2) {
        $(this).toggleClass("CVselected");
        $("#selectCV div").eq(3).toggleClass("CVselected");
    }   else if ($(this).index() == 3) {
        $(this).toggleClass("CVselected");
        $("#selectCV div").eq(2).toggleClass("CVselected");
    }
    if ($("#selectCV div").eq(0).hasClass("CVselected") && $("#selectCV div").eq(2).hasClass("CVselected")){
        $("#linkToCV").attr("href", "https://drive.google.com/open?id=1O6i0fCbxdvZg0ZimI4Ok84tAS1nZHaCs");
    }   else if ($("#selectCV div").eq(1).hasClass("CVselected") && $("#selectCV div").eq(2).hasClass("CVselected")){
        $("#linkToCV").attr("href", "https://drive.google.com/open?id=1fH3PKscd9yETH554VBbULMvGtjcpVoxK");
    }   else if ($("#selectCV div").eq(0).hasClass("CVselected") && $("#selectCV div").eq(3).hasClass("CVselected")){
        $("#linkToCV").attr("href", "https://drive.google.com/open?id=1D8teIo29ZaGMQHtmEPh1goIW4WMpiz9u");
    }   else {
        $("#linkToCV").attr("href", "https://drive.google.com/open?id=1m2Ro_QAXTqfrSieI3THVH-HsTAA_M4Vf");
    }
});

// WORK EXPERIENCE LINK TO CV
$("#linkToDownloadCV").on("click", function(){
    test("#downloadCV");
});

// WORK EXPERIENCE TOGGLE SHOW JOB
$("#listOfJobs li").on("click", function(){
    $(this).nextUntil("li").slideToggle(400);
});

// PROGRAMS LINKS
$("#linkToCube").on("click", function(){
    showClickedTab("#cube");
})
$("#linkToRandomSelector").on("click", function(){
    showClickedTab("#randomSelector");
});

// CUBE DIFFICULTY
$("#selectDifficulty input").on("click", function(){
    $("#staticCube").css("animation-duration", $(this).val());
});

// CUBE MOVEMENT
$("#staticCube").hover(function(){
    $(this).toggleClass("movingCube");
    $("#cubeCounter").html(0);
    var i = randomInteger(1, 4);
    if (i >= 4){
        $("#staticCube").addClass("cubeSalmon");
    } else if (i == 3){
        $("#staticCube").addClass("cubeSalmon");
    } else if (i == 2){
        $("#staticCube").addClass("cubeSalmon");
    } else {
        $("#staticCube").addClass("cubeSalmon");
    }
},  function(){
        $(this).removeClass();
    });
    
// CLICK COUNTER
$("#staticCube").on("click", function(){
    $("#cubeCounter").html(parseInt($("#cubeCounter").html())+1); 
})

// WILL BE USEFUL
