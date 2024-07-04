const currentDay = document.getElementById("currentDay");
const currentTime = document.getElementById("currentTime");
function updateTime() {
  const now = new Date();
  let hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeUTC = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} ${ampm}`;
  currentTime.innerHTML = timeUTC;
}

function updateDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = days[now.getUTCDay()];
  currentDay.innerHTML = day;
}

// Update time and day immediately
updateTime();
updateDay();

// Update every second
setInterval(updateTime, 1000);
