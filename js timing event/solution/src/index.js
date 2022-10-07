function showCurrentDate() {
  let dateElement = document.querySelector("#date");

  dateElement.innerHTML = new Date();
}

function showCurrentMilliseconds() {
  let millisecondsElement = document.querySelector("#milliseconds");
  let currentDate = new Date();
  millisecondsElement.innerHTML = currentDate.getMilliseconds();
}

setTimeout(showCurrentDate, 5000);

setInterval(showCurrentMilliseconds, 1);
