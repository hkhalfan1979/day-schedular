console.log("script connected");

$(document).ready(function () {
     // curremt day and time
     $("#currentDay").text(moment().format("dddd, MMMM Do")); 
     $("#currentTime").text(moment().format("h:mm:ss a"));
     
     // Local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    // saveBtn - event listener
    $(".saveBtn").on("click", function () {
        var inputText = $(this).siblings(".description").val();
        var inputTime = $(this).parent().attr("id");

        localStorage.setItem(inputTime, inputText);
    })
       
    
})