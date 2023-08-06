//create function that sets data js for each p elment in Schedule
function setAttribute() {}

$(document).ready(function () {
  // Get the current time using Day.js

  const currentTime = dayjs();
  //using forEach to convert and targe evry p element with clas "time"
  const targetTime = document.querySelectorAll(".time");
  targetTime.forEach((targetTime) => {
    //converting in a string and removing space
    const timeToString = targetTime.textContent.trim();
    const timeAction = dayjs(timeToString, "hA");
    console.log(timeAction);
  });

  // Check if the current time is after the target time
  if (currentTime.isAfter(targetTime)) {
    // If it's past 12 PM, add the "future" class to the elements with the "hour" class
    $("#inp").addClass("past");
  }
});
