$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
  var currentTime = parseInt(moment().format("HH"));
  //var currentTime = moment().format("HH");
  //array
  var timeDisplay = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (var i = 0; i < timeDisplay.length; i++) {
    //var timeStorage = localStorage.getItem(time[i]);
    console.log(timeDisplay[i]);

    //Variables for the function

    var row = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $("<button>");

    //CSS classes
    hour.addClass("hour col-sm-1");
    description.addClass("description col-sm-10");
    saveBtn.addClass("saveBtn col-sm-1 fas fa-save fa-lg");
    row.addClass("row time-block");

    /*hour.attr("timeAttribute", timeDisplay[i].value);
    description.attr("descriptionAttribute", timeDisplay[i].value);
    saveBtn.attr("buttonAttribute", timeDisplay[i].value);*/

    hour.text(timeDisplay[i]);
    //description.text(timeDisplay[i].display);
    //saveBtn.text(timeDisplay[i].display);

    row.append(hour);
    row.append(description);
    row.append(saveBtn);
    $(".container").append(row);

    //Rows change color based on time
    if (timeDisplay[i] < currentTime) {
      description.addClass("past");
      //description.removeClass("future");
      //description.removeClass("present");
      console.log(currentTime);
    } else if (timeDisplay[i] === currentTime) {
      //description.removeClass("past");
      //description.removeClass("future");
      description.addClass("present");
    } else {
      //description.removeClass("present");
      //description.removeClass("past");
      description.addClass("future");
    }
  }

  //console.log("hello");
  //Dom Variables
  //JS Variables
  //Function Definitions
  //Function Calls
  //Event Listeners
});

//Div for Day, input field & button.
//loop through array of numbers
//if < currentHour then gray, if = currentHour then red, if > currentHour then green

//$(".saveBtn").click(function() {
