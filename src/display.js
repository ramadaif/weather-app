import processWeather from "./process.js";

const locationform = document.querySelector("#location-form");
const locationinput = document.querySelector("#location-input");
const weatherdisplay = document.querySelector("#weather-display");
const button = document.querySelector("#unit-toggle");

let currentUnit = "C";
let currentWeatherData = null;

const displayWeather = (weatherData) => {
  const temperature =
    currentUnit === "C"
      ? weatherData.temperature
      : (weatherData.temperature * 9) / 5 + 32;

  const feelsLike =
    currentUnit === "C"
      ? weatherData.feelsLike
      : (weatherData.feelsLike * 9) / 5 + 32;

  const unit = currentUnit === "C" ? "°C" : "°F";

  weatherdisplay.innerHTML = `
    <h2>Weather in ${weatherData.city}</h2>
    <p>Temperature: ${temperature.toFixed(1)} ${unit}</p>
    <p>Feels Like: ${feelsLike.toFixed(1)} ${unit}</p>
    <p>Humidity: ${weatherData.humidity}%</p>
    <p>Description: ${weatherData.description}</p>
  `;
};

const renderWeather = async (location) => {
  try {
    const weatherData = await processWeather(location);

    currentWeatherData = weatherData;

    displayWeather(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    weatherdisplay.textContent =
      "Error fetching weather data. Please try again.";
  }
};

button.addEventListener("click", () => {
  currentUnit = currentUnit === "C" ? "F" : "C";

  if (currentWeatherData) {
    displayWeather(currentWeatherData);
  }
});

locationform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = locationinput.value;

  renderWeather(location);
});

export { renderWeather, displayWeather };
