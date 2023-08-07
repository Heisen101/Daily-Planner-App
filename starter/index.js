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

  $(".container").each(function () {
    var TimeT = $(this).find(".number").attr("id");
    TimeT = dayjs(TimeT, "HH");
    var colorChange = $(this).find(".form-control");
    if (TimeT === currentTime) {
      colorChange.addClass("present").css("background-color", "#adf7d1");
    } else if (currentTime < TimeT) {
      colorChange.addClass("future");
    } else {
      colorChange.addClass("past");
    }
    console.log(TimeT);
  });
}
checkTime();
