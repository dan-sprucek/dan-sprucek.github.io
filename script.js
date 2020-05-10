$("a").mouseover(function(){
    $(this).siblings().addClass("showOptions")
});

// $("a").mouseout(function(){
//     $(this).siblings().removeClass("showOptions")
// });

$("li").mouseout(function(){
    $(this).children().removeClass("showOptions")
});