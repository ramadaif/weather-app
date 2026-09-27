import "./style.css";
import processWeather from "./process.js";
import { displayWeather } from "./display.js";

const locationform = document.querySelector("#location-form");
const locationinput = document.querySelector("#location-input");
const button = document.querySelector("#toggle-button");

let currentUnit = "C";
let currentWeatherData = null;

const renderWeather = async (location) => {
  try {
    const weatherData = await processWeather(location);

    currentWeatherData = weatherData;

    displayWeather(weatherData, currentUnit);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

locationform.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = locationinput.value;

  renderWeather(location);
});

button.addEventListener("click", () => {
  currentUnit = currentUnit === "C" ? "F" : "C";

  if (currentWeatherData) {
    displayWeather(currentWeatherData, currentUnit);
  }
});

export { renderWeather };
