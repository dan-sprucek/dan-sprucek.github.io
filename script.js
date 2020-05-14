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
// $(".mainContainer").first().addClass("active");
// $(".tabs").eq($(".active").index()).addClass("activeTab");
if (!location.hash){
    location.hash = "#about";
} else {
    var container, pagename;
    for (i = 0; i < $(".mainContainer").length; i++){
        container = $(".mainContainer").eq(i).attr("id");
        tabName = $(".tabs").eq(i).attr("href").substring(1);
        pagename = location.hash.substring(1);
        if (container === pagename){
            $(".mainContainer").eq(i).addClass("active");
        }   else {
            $(".mainContainer").eq(i).removeClass("active");
            };
        if (tabName === pagename){
            $(".tabs").eq(i).addClass("activeTab");
        }   else {
            $(".tabs").eq(i).removeClass("activeTab");
            };
        };
};

// CLICKING NAVIGATION OPTIONS
// $("#navigationBarList li a").on("click", function(){
//     $(".mainContainer").removeClass("active");
//     $("#navigationBarList li a").removeClass("activeTab");
//     $(".mainContainer").eq($("#navigationBarList li a").index(this)).addClass("active");
//     $("#navigationBarList li a").eq($(".active").index() - 2).addClass("activeTab");
// });

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
$(".linkToDownloadCV").on("click", function(){
    showClickedTab("#downloadCV");
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
var multiplicator, cubeClickTime = 61000;
$("#selectDifficulty input").on("click", function(){
    $("#staticCube").css("animation-duration", $(this).val());
    multiplicator = $(this).parent().index() + 1;
    cubeClickTime = $(this).data("interval");
});

// CUBE MOVEMENT + CLICK COUNTER
var cubeTimer;
$("#staticCube").hover(function(){
    $(this).toggleClass("movingCube");
    $("#cubeCounter").html(0);
    var i = randomInteger(1, 4);
    if (i == 1){
        $("#staticCube").addClass("cubeSalmon");
    } else if (i == 2){
        $("#staticCube").addClass("cubeBlack");
    } else if (i == 3){
        $("#staticCube").addClass("cubeBlue");
    } else {
        $("#staticCube").addClass("cubeGreen");
    };  
    $("#selectAnswer div").children(0).val("");
    $("#selectAnswer div").eq(i - 1).children(0).val("correct");
    $("#selectAnswer").next().html("");
    $("#selectAnswer div input").prop("checked", false);
    $("#staticCube").on("click", function(){
        $("#cubeCounter").html(parseInt($("#cubeCounter").html())+1); 
    });
    cubeTimer = setTimeout(function(){$("#staticCube").off("click");}, cubeClickTime);
},  function(){
        $(this).removeClass();
        clearTimeout(cubeTimer);
        $("#staticCube").off("click");
    });

// CORRECT ANSWER CHECKER
var score, bestScore;
$("#selectAnswer div input").on("click", function(){
    if ($(this).val() == "correct"){
        $("#selectAnswer").next().html("Your answer is <span>CORRECT</span>! Your final score is <span id='finalScore'></span>");
        $("#finalScore").html(parseInt($("#cubeCounter").html()) * multiplicator + 10 * multiplicator);
        score = ($("#finalScore").html());
        bestScore = ($("#bestScore").html());
        if (score > bestScore) {
            $("#bestScore").html(score);
        }
    } else {
        $("#selectAnswer").next().html("Your answer is <span>INCORRECT :(</span>, but try again!");
        $("#selectAnswer div").children(0).val("");
    }
});

// RANDOM SELECTOR
// SELECTS INSIDE OF INPUT
$("#randomSelectContainer input").on("click", function(){
    $(this).select();
});

// ADDS NEW PERSON + SHOWS SUBMIT
$("#addPerson").on("click", function(){
    if ($("#randomSelectContainer input").val() == ""){
    } else{
    $("#randomSelectContainer ol").append("<li><span>" + $("#randomSelectContainer input").val() + "</span><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png' style='width:10px;height:10px'</li>");
    if ($("#randomSelectContainer ol").children().length > 1){
        $("#showAtLeastTwo").show();
    } else {
        $("#showAtLeastTwo").hide();
    }
};
});

// REMOVES PERSON + HIDES SUBMIT
$("#randomSelectContainer ol").on("click", "li img", function(){
    $(this).parent().remove();
    if ($("#randomSelectContainer ol").children().length > 1){
        $("#showAtLeastTwo").show();
    } else {
        $("#showAtLeastTwo").hide();
    }
});

// FIRES RANDOM
$("#showRandom").on("click", function(){
    var i = randomInteger(1, $("#randomSelectContainer ol").children().length);
    $("#randomResult").show();
    $("#randomResult span").text($("#randomSelectContainer ol li").eq(i-1).children('span').html());
});

// RESETS FUNCTION
$("#resetRandom").on("click", function(){
    $("#resetNotification").show();
});

$("#resetRandom").on("dblclick", function(){
    $($("#randomSelectContainer ol").children().remove());
    $("#showAtLeastTwo").hide();
    $("#randomResult").hide();
    $("#resetNotification").hide()
    $("#randomSelectContainer input").val("");
});

// HOBBIES
$(".linkToSport").on("click", function(){
    showClickedTab("#sport");
});

$(".linkToPrograms").on("click", function(){
    showClickedTab("#programs");
});

// GO BACK = WHERE I WAS; ANIMATION?
// $(window).on("hashchange", function(){
//     console.log(location.hash);
//     if (location.hash == "#/about") {
//         $(".mainContainer").eq(3).toggle();
//     }
// });

// $("#navigationBarList li a").on("click", function(){
//     $(".mainContainer").removeClass("active");
//     $("#navigationBarList li a").removeClass("activeTab");
//     $(".mainContainer").eq($("#navigationBarList li a").index(this)).addClass("active");
//     $("#navigationBarList li a").eq($(".active").index() - 2).addClass("activeTab");
// });

// console.log("test");
// console.log($("#programs").attr("id"));
// if (location.hash.substring(1) == $(".mainContainer").attr("id")){
//     alert("might be");
    
// }
// console.log(location.hash.substring(1));
// console.log($(".mainContainer").length);
// console.log($(".mainContainer").eq(1).attr("id"));
// console.log(location.hash.substring(1));
// console.log($(".tabs").eq(1).attr("href").substring(1));



$(window).on("hashchange", function(){
    var container, pagename;
    for (i = 0; i < $(".mainContainer").length; i++){
        container = $(".mainContainer").eq(i).attr("id");
        tabName = $(".tabs").eq(i).attr("href").substring(1);
        pagename = location.hash.substring(1);
        if (container === pagename){
            $(".mainContainer").eq(i).addClass("active");
        }   else {
            $(".mainContainer").eq(i).removeClass("active");
            };
        if (tabName === pagename){
            $(".tabs").eq(i).addClass("activeTab");
        }   else {
            $(".tabs").eq(i).removeClass("activeTab");
            };
        }
    });
