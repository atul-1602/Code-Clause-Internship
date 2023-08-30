//TIMER
const startingMinutes = prompt("Enter the time in minutes");
let time = startingMinutes * 60;

const countDown = document.querySelector(".timerh2");

let counter = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countDown.innerHTML = `${minutes}:${seconds}`;
  time--;
}
const pause = document.querySelector(".pause");
pause.addEventListener("click", function () {
  clearInterval(counter);
});

const play = document.querySelector(".play");
play.addEventListener("click", function () {
  counter = setInterval(updateCountdown, 1000);
});
