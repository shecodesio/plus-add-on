// Challenge 2
let honoluluDateElement = document.querySelector("#current-date");
let honoluluCurrentDate = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:mm A");
honoluluDateElement.innerHTML = `It is ${honoluluCurrentDate} in Honolulu, Hawaii`;

// Challenge 3
let parisDateElement = document.querySelector("#future-date");
let parisDate = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:mm A");

parisDateElement.innerHTML = `10 years from now, it will be ${parisDate} in Paris France`;

// Challenge 4
let localTimeZoneElement = document.querySelector("#local-time-zone");
let currentTimeZone = moment.tz.guess();

localTimeZoneElement.innerHTML = currentTimeZone;
