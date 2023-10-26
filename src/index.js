// change weather information

function showTemperature(response) {
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let icon = response.data.condition.icon;

  let temperatureElement = document.querySelector("#local-temp");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let weatherDescription = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind} km/h`;
  weatherDescription.innerHTML = response.data.condition.description;
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
}

let apiKey = "bd9edf310f38ad20ae3ff7oeab4bet42";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Los Angeles&key=${apiKey}&units=metric`;

axios.get(apiURL).then(showTemperature);
