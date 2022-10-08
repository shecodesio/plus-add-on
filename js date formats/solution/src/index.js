// Challenge 2
let currentDateElement = document.querySelector("#current-date");
let currentDate = moment();
let formattedCurrentDate = currentDate.format("dddd, MMMM	D, YYYY");

currentDateElement.innerHTML = `Today is ${formattedCurrentDate}`;

// Challenge 3
let futureDateElement = document.querySelector("#future-date");
let futureDate = moment().add(10, "years");
let formattedFutureDate = futureDate.format("dddd, MMMM D, YYYY H:mm:ss");
futureDateElement.innerHTML = `10 years from now, it will be ${formattedFutureDate}`;
