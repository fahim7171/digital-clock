let hour_section = document.querySelector(".hour");
let min_section = document.querySelector(".min");
let sec_section = document.querySelector(".sec");
let am_pm_section = document.querySelector(".am_pm");

function updateTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
    am_pm_section.innerText = "PM";
  } else if (hour == 12) {
    am_pm_section.innerText = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm_section.innerText = "AM";
  } else {
    am_pm_section.innerText = "AM";
  }
  hour < 10
    ? (hour_section.innerText = "0" + hour)
    : (hour_section.innerText = hour);
  min < 10
    ? (min_section.innerText = "0" + min)
    : (min_section.innerText = min);
  sec < 10
    ? (sec_section.innerText = "0" + sec)
    : (sec_section.innerText = sec);
}

updateTime();
setInterval(updateTime, 1000);
