// PRE-DEFINED FUNCTIONS
// SELECT RANDOM NUMBER
function randomInteger(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min));
};

// NAVBAR FIRST OPTION LEFT BORDER
$("#navigationBarList li a").first().css("border-left", "1px solid white");

// DECIDING WHETHER TO USE CURRENT LEARNIGN + RANDOM QUOTE
$(window).on("load resize", function(){
    if ($(window).width() < 1200){
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
if (!location.hash){
    location.hash = "#welcome";
    $("#welcomex").css("display", "inline");
}   else if (location.hash === "#welcome") {
    $("#welcomex").css("display", "inline");
} else {
    var container, pagename;
    for (i = 0; i < $(".mainContainer").length; i++){
        container = $(".mainContainer").eq(i).attr("id");
        tabName = $(".tabs").eq(i).attr("href").substring(1) + "x";
        pagename = location.hash.substring(1) + "x";
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
        $(".dropdownContent li a").parent().parent().siblings("a").removeClass("activeUnderTab");
        for (j = 0; j < $(".dropdownContent li a").length; j++){
        if ($(".dropdownContent li a").eq(j).hasClass("activeTab")){
            $(".dropdownContent li a").eq(j).parent().parent().siblings("a").addClass("activeUnderTab");
        };
    };
};
// SKIP OPENNING WINDOW
$("#animationSkip").on("click", function(){
    location.href = "#about"
    $("#welcomex").hide();
});
// OPEN THE WINDOW
$("#welcomex").on("click", function(){
    location.href = "#about"
    $("#openingMid").fadeOut(1000);
    $(".lockMid1, .lockMid2").delay(1100).queue(function(next){
        $(this).css({
            "background-color": "lime",
            "box-shadow": "0 0 10px lime"});
            next();
        });
    $(".lockTopMid, .lockBottomMid").delay(1700).queue(function(next){
        $(this).css({
            "background-color": "lime",
            "box-shadow": "0 0 10px lime"});
            next();
        });
    $(".lockTop, .lockBottom").delay(2300).queue(function(next){
        $(this).css({
            "background-color": "lime",
            "box-shadow": "0 0 10px lime"});
            next();
        });
    $(".opening").delay(2600).animate({
    width: 0
    }, 2500, function(){
        $("#welcomex").hide();
    })
});

// CLICKING NAVIGATION OPTIONS
$(window).on("hashchange", function(){
    var container, pagename;
    if (location.hash === "#welcome") {
        $("#welcomex").css("display", "inline");
        $(".opening").css("width", "50%");
        $("#openingMid").show();
        $(".lock").css({
            "background-color": "red",
            "box-shadow": "0 0 10px red"});
    } else {
        for (i = 0; i < $(".mainContainer").length; i++){
        container = $(".mainContainer").eq(i).attr("id");
        tabName = $(".tabs").eq(i).attr("href").substring(1) + "x";
        pagename = location.hash.substring(1) + "x";
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
    };
    $(".dropdownContent li a").parent().parent().siblings("a").removeClass("activeUnderTab");
    for (j = 0; j < $(".dropdownContent li a").length; j++){
        if ($(".dropdownContent li a").eq(j).hasClass("activeTab")){
            $(".dropdownContent li a").eq(j).parent().parent().siblings("a").addClass("activeUnderTab");
        };
    }
    
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
        $("#linkToCV").attr("href",/* ENGLISH PDF */ "https://drive.google.com/file/d/1ZcU5-H9zAH93qZ5IUYBiu321HDW24axe/view?usp=sharing");
    }   else if ($("#selectCV div").eq(1).hasClass("CVselected") && $("#selectCV div").eq(2).hasClass("CVselected")){
        $("#linkToCV").attr("href",/* CZECH PDF */ "https://drive.google.com/file/d/1DUPrhjdQfmAzccA4piGnr2MziHpEZBit/view?usp=sharing");
    }   else if ($("#selectCV div").eq(0).hasClass("CVselected") && $("#selectCV div").eq(3).hasClass("CVselected")){
        $("#linkToCV").attr("href",/* ENGLISH DOCX */ "https://drive.google.com/file/d/1_aB0Enc_JeyGtAenQDdySrw_hL65w-er/view?usp=sharing");
    }   else {
        $("#linkToCV").attr("href",/* CZECH DOCX */ "https://drive.google.com/file/d/1X6MHb9fboNGHn16cWp6LdeT4ujVU__Nb/view?usp=sharing");
    }
});

// WORK EXPERIENCE TOGGLE SHOW JOB
$("#listOfJobs li span").on("click", function(){
    $(this).parent().siblings("li").children("p").hide(600);
    $(this).siblings("p").delay(100).slideToggle(600);
});

// CUBE DIFFICULTY
var multiplicator = 1, cubeClickTime = 31000;
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
        $("#cubeCounter").animate({
            fontSize: "24px"
        }, 100, function(){
            $("#cubeCounter").animate({
                fontSize: "16px"
            }, 100)
        });
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
        $("#finalScore").html(parseInt($("#cubeCounter").html()) * multiplicator + multiplicator * 10);
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

// ROMAN NUMERALS
$("#showRoman").on("click", function() {
    $("#romanResult").show();
    let newNum = [];
    let changeNum = $("#latinNumber").val();
    if (changeNum >= 1000) {
      for (let i = 1000; i <= changeNum; changeNum -= 1000) {
        newNum.push("M")
      }
    }
    if (changeNum >= 900) {
      for (let i = 900; i <= changeNum; changeNum -= 900) {
        newNum.push("CM")
      }
    }
    if (changeNum >= 500) {
      for (let i = 500; i <= changeNum; changeNum -= 500) {
        newNum.push("D")
      }
    }
    if (changeNum >= 400) {
      for (let i = 400; i <= changeNum; changeNum -= 400) {
        newNum.push("CD")
      }
    }
    if (changeNum >= 100) {
      for (let i = 100; i <= changeNum; changeNum -= 100) {
        newNum.push("C")
      }
    }
    if (changeNum >= 90) {
      for (let i = 90; i <= changeNum; changeNum -= 90) {
        newNum.push("XC")
      }
    }
    if (changeNum >= 50) {
      for (let i = 50; i <= changeNum; changeNum -= 50) {
        newNum.push("L")
      }
    }
    if (changeNum >= 40) {
      for (let i = 40; i <= changeNum; changeNum -= 40) {
        newNum.push("XL")
      }
    }
    if (changeNum >= 10) {
      for (let i = 10; i <= changeNum; changeNum -= 10) {
        newNum.push("X")
      }
    }
    if (changeNum >= 9) {
      for (let i = 9; i <= changeNum; changeNum -= 9) {
        newNum.push("IX")
      }
    }
    if (changeNum >= 5) {
      for (let i = 5; i <= changeNum; changeNum -= 5) {
        newNum.push("V")
      }
    }
    if (changeNum >= 4) {
      for (let i = 4; i <= changeNum; changeNum -= 4) {
        newNum.push("IV")
      }
    }
    if (changeNum >= 1) {
      for (let i = 1; i <= changeNum; changeNum -= 1) {
        newNum.push("I")
      }
    }
    $("#romanResult span").html(newNum.join(""));
  })

// CAESAR CIPHER
$("#cipherStart").on("click", function() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let index = parseInt($("#cipherNumber").val())
    let newerArr = [];
    let newArr = $.trim($("#cipherText").val().toUpperCase());
    newArr
    .split("")
    .map(val => {
      if (alphabet.indexOf(val) < 0) {
        newerArr.push(val)
      } else {
        let newIndex = alphabet.indexOf(val) + index
        if (newIndex > 25) {
          newerArr.push(alphabet.charAt(newIndex - 26))
        } else {
          newerArr.push(alphabet.charAt(newIndex))
        }
      }
    })
    $("#cipherResult").html(newerArr.join(""))
})
$("#decipherStart").on("click", function() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let index = parseInt($("#cipherNumber").val())
    let newerArr = [];
    let newArr = $.trim($("#cipherText").val().toUpperCase());
    newArr
    .split("")
    .map(val => {
      if (alphabet.indexOf(val) < 0) {
        newerArr.push(val)
      } else {
        let newIndex = alphabet.indexOf(val) - index
        if (newIndex < 0) {
          newerArr.push(alphabet.charAt(newIndex + 26))
        } else {
          newerArr.push(alphabet.charAt(newIndex))
        }
      }
    })
    $("#cipherResult").html(newerArr.join(""))
})