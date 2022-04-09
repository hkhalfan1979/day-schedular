console.log("script connected");


$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    $("#currentTime").text(moment().format("h:mm:ss a"));


    $(".saveBtn").on("click", function (event) {
          event.preventDefault();
     });
});