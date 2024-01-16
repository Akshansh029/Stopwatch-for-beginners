let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let msCount = 0;
let secCount = 0;
let minCount = 0;
let hourCount = 0;
let timer;
function incrementMs() {
  msCount += 1;
  milliseconds.textContent = msCount.toString().padStart(2, "0");
  if (msCount >= 99) {
    msCount = 0;
    secCount += 1;
    seconds.textContent = secCount.toString().padStart(2, "0");
    if (secCount >= 60) {
      secCount = 0;
      minCount += 1;
      minutes.textContent = minCount.toString().padStart(2, "0");
      if (minCount >= 60) {
        minCount = 0;
        hourCount += 1;
        hours.textContent = hourCount.toString().padStart(2, "0");
      }
    }
  }
}
function startClock() {
  timer = setInterval(incrementMs, 10);
}
function stopClock() {
  clearInterval(timer);
}
function resetClock() {
  msCount = 0;
  secCount = 0;
  minCount = 0;
  hourCount = 0;
  milliseconds.textContent = msCount.toString().padStart(2, "0");
  seconds.textContent = secCount.toString().padStart(2, "0");
  minutes.textContent = minCount.toString().padStart(2, "0");
  hours.textContent = hourCount.toString().padStart(2, "0");
}
stopClock();
