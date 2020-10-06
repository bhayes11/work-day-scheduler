$(document).ready(function () {
  //array
  var time = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (var i = 0; i < time.length; i++) {
    var timeStorage = localStorage.getItem(time[i]);
    console.log(time);
  }

  var row = $("<div>");
  var hour = $("<div>");
  var description = $("<textarea>");
  var saveBtn = $("<button>");
  hour.addClass("hour col-sm-1");

  //console.log("hello");
  //Dom Variables
  //JS Variables
  //Function Definitions
  //Function Calls
  //Event Listeners
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
  //$(".container").append("<div>hi</div>");
});

//Div for Day, input field & button.
//loop through array of numbers
//if < currentHour then gray, if = currentHour then red, if > currentHour then green

//$(".saveBtn").click(function() {
