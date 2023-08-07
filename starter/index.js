//create element that will display day
var today = dayjs();
$("#currentDay").text(today.format("dddd, D MMMM  YYYY,"));
//create function that sets data js for each p elment in Schedul

function checkTime() {
  // Get the current time using Day.js

  const currentTime = dayjs().hour();
  console.log(currentTime);
  //   const valueV = $(".number").data("value");
  //   console.log(valueV);

  //eaterating over data value inside conainer to compare the data value with the time and sett the class acordinly to the time
  $(".row").each(function () {
    var TimeT = parseInt($(this).find(".number").attr("data-value")); //targeting id inside container and prase it into a number
    // TimeT = TimeT.split("-")[0];
    // var newT = parseInt(TimeT);

    console.log(TimeT);
    var colorChange = $(this).find(".form-control");
    if (TimeT === currentTime) {
      colorChange.addClass("present");
    } else if (TimeT < currentTime) {
      colorChange.addClass("past");
    } else {
      colorChange.addClass("future");
    }

    // return TimeT;
    // console.log(newT);
  });
}
checkTime();
