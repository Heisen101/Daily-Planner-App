var textInp = document.querySelectorAll(".form-control");

//create element that will display day
var today = dayjs();
$("#currentDay").text(today.format("dddd, D MMMM  YYYY,"));
//create function that sets data js for each p elment in Schedul

function checkTime() {
  // Get the current time using Day.js

  const currentTime = dayjs().hour();
  console.log(currentTime);

  //eaterating over data value inside conainer to compare the data value with the time and sett the class acordinly to the time
  $(".row").each(function () {
    var TimeT = parseInt($(this).find(".number").attr("data-value")); //targeting id inside container and prase it into a number

    var colorChange = $(this).find(".form-control"); //targts the input area where color will be displayed
    if (TimeT === currentTime) {
      colorChange.addClass("present"); //class be present if times are equal
    } else if (TimeT < currentTime) {
      colorChange.addClass("past"); //class past if time passed
    } else {
      colorChange.addClass("future"); //class future if time not arrived
    }
  });
}
checkTime();

//save event in localStorage

var saveBt = $(".saveBtn");
saveBt.on("click", function () {
  var textA = $(this).closest(".row").find(".form-control"); //finding input area and storing in textA
  var inputValue = textA.val("");
});
