console.log("script connected");
$(document).ready(function () {
     // curremt day and time
     $("#currentDay").text(moment().format("dddd, MMMM Do"));      
     $("#currentTime").text(moment().format("h:mm:ss a"));
     
     // setup and get Local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));

    function timeBlock() {
     // declare current hour
     var currentHour = moment().hours();

     //  Loop on time-blocks and check where we are in the hours block and adds/removes classes.

     $(".time-block").each(function () {
         var hourEl = $(this).attr("id");
         var hourBlock = hourEl.substring(5, hourEl.length);
         var intHourBlock = parseInt(hourBlock)
         var intCurrentHour = parseInt(currentHour);

          if (parseInt(intHourBlock) < parseInt(intCurrentHour)) {
               $(this).addClass("past");
               $(this).removeClass("future");
               $(this).removeClass("present");
          }
          else if (parseInt(intHourBlock) > parseInt(intCurrentHour)) {
               $(this).addClass("future");
               $(this).removeClass("present");
               $(this).removeClass("past");
          }
          else if (parseInt(intHourBlock) === parseInt(intCurrentHour)) {
               $(this).addClass("present");
               $(this).removeClass("future");
               $(this).removeClass("past");
          }
          })
     };
     timeBlock();

 
    // saveBtn - event listener
    $(".saveBtn").on("click", function () {
        var inputText = $(this).siblings(".description").val();
        var inputTime = $(this).parent().attr("id");
        console.log(this);
        localStorage.setItem(inputTime, inputText);
    })
       
    
})