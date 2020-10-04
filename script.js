$(document).ready(function () {
  //console.log("hello");
  //Dom Variables
  //JS Variables
  //Function Definitions
  //Function Calls
  //Event Listeners
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
  $(".container").append("<div>hi</div>");
});

//Div for Day, input field & button.
//loop through array of numbers
//if < currentHour then gray, if = currentHour then red, if > currentHour then green
