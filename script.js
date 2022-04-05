console.log("script connected");

$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
});