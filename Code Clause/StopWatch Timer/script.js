let [hours, minutes, seconds] = [00, 00, 00];
let displayTime = document.querySelector(".stopWatchtime");
let timer = null;
function watch() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(watch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime.innerHTML = "00:00:00";
}
