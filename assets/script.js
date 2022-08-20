var saveButton = document.getElementsByClassName("saveBtn");
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(currentDay);
//saveBtn
$(document).ready(function() {
$(".saveBtn").on("click", function () {
    var textBlock = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");

localStorage.setItem(timeBlock, textBlock);
});
});


function trackTime() {
    var currentTime = moment().hour();

//timeblock loop
$(".time-block").each(function()   {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < currentTime) {
        $(this).addClass("future");
        $(this).addClass("present");
        $(this).addClass("past");
    }
    else if (timeBlock == currentTime) {
        $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present"); 
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})};
//retreiving items from local storage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
trackTime();

 

