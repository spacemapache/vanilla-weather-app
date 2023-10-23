// feature 1 - current date
let now = new Date();
now.getDay();
now.getHours();
now.getMinutes();
now.getDate();
now.getMonth();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();

let h3 = document.querySelector("h3");
h3.innerHTML = `${currentDay} ${currentDate} ${currentMonth}, ${currentHour}:${currentMinutes}`;

// show temperature while changing city

function search() {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");

  let city = document.querySelector("h1");
  city.innerHTML = `${cityInput.value}`;

  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`;
  console.log(apiURL);
  axios.get(apiURL).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#local-temp");
  temperatureElement.innerHTML = `${temperature}`;

  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind} km/h`;
}

let clickButton = document.querySelector("button");
clickButton.addEventListener("click", search);

// current location
function currentTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let currentTemp = document.querySelector("#local-temp");
  currentTemp.innerHTML = `${temperature}`;

  let humidity = Math.round(response.data.main.humidity);

  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${humidity}%`;

  let wind = Math.round(response.data.wind.speed);

  let currentWind = document.querySelector("#wind");
  currentWind.innerHTML = `${wind} km/h`;

  let cityName = response.data.name;

  let heading = document.querySelector("h1");
  heading.innerHTML = `${cityName}`;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiURL).then(currentTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-Temp");
button.addEventListener("click", getCurrentPosition);

//feature 3 - celsius fahrenheit
function fahrenheitTemp() {
  let localTemp = document.querySelector("#local-temp");
  localTemp.innerHTML = "88";
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", fahrenheitTemp);

function celsiusTemp() {
  let localTemp = document.querySelector("#local-temp");
  localTemp.innerHTML = "31";
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", celsiusTemp);
