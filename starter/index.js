$(document).ready(function () {
  // Get the current time using Day.js
  const currentTime = dayjs();

  // Set the target time (e.g., 12 PM)
  const targetTime = dayjs().hour().minute().second(); // 12 PM

  // Check if the current time is after the target time
  if (currentTime.isAfter(targetTime)) {
    $("#inp").addClass("past");
  } else
});
