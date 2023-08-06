//create function that sets data js for each p elment in Schedul

$(document).ready(function () {
  // Get the current time using Day.js

  const currentTime = dayjs();
  console.log(currentTime);
  const curr = document.getElementById("ws");
  const valueV = curr.getAttribute("data-value");
  console.log(valueV);

  // Set the target time (e.g., 12 PM)
  //   const targetTime = dayjs().hour(23).minute(0).second(0); // 12 PM

  // Check if the current time is after the target time
  if (currentTime > valueV) {
    // If it's past 12 PM, add the "future" class to the elements with the "hour" class
    $("#inp").addClass("past");
  }
});
