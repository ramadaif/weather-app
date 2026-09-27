//api

//build an async function that will fetch then check if its okay or not , w baadaha e3mly law response.ok w e3mly el catch error w baad keda return .json

//function to process data yaany hn take el infromation from json w baadha hanshof mehtaga eh menha

//h catch el form w a3mel add event listner
// const form = document.querySelector('#___');
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const location = ___;
//   const rawData = await fetchWeatherByLocation(___);
//   console.log(rawData);
// });

//display page:
// h call process weather dy
//write  a render function enha t display kolo fy el content beta3 el html
//Store the current unit (C or F) somewhere — component state
//     doesn't exist in plain JS, so a simple module-level variable
//     or a data attribute works

//add a toggle or switch button that re renders

// loading:
// show your loading before the fetch finishes hide it baadaha lama a have el data

async function fetchWeatherByLocation(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);

    throw error;
  }
}

export default fetchWeatherByLocation;
