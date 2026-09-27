import fetchWeatherByLocation from "./api.js";

async function processWeather(location) {
  try {
    const rawData = await fetchWeatherByLocation(location);
    return {
      city: rawData.name,
      temperature: rawData.main.temp,
      feelsLike: rawData.main.feels_like,
      humidity: rawData.main.humidity,
      description: rawData.weather[0].description,
    };
  } catch (error) {
    console.error("Error processing weather data:", error);
    throw error;
  }
}

export default processWeather;
