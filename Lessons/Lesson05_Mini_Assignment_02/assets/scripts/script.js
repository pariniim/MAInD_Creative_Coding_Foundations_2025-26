const CONTAINER = document.getElementById("container");

const API_KEY = "80d1993378fa9e47ffc9c7fec53fe1d2";
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?lat=45.9&lon=8.96&units=metric&appid=" + API_KEY

/*
fetch(API_URL)
  .then(response => response.json()) //** It's the shortcut to call a function.
  .then(data => displayData(data))
  .catch(error => displayError(error));


  function displayData(data) {
    console.log(data);

    const FORECAST = data.list;
    console.log(FORECAST);

    for (let item of FORECAST) {
        const DATE_TIME = item.dt_txt;
        const DATE = DATE_TIME.substring(0, 10);
        const TIME = DATE_TIME.substring(11, 16);
        const TEMP = item.main.temp; 

        console.log(DATE, TIME, TEMP);
    }
  }

  function displayError(error) {
    console.log(error);
  }
  */
  
  fetch(API_URL)
    .then(response => response.json()) //** => is used to create a shortcut to call a function.
    .then(data => showData(data))
    .catch(error => showError(error));

  function showData(data) {
    const weatherData = data.list;

    console.log(weatherData);

    for (let item of weatherData) {
      const temperature = item.main.temp;
      const tempFix = (temperature + 5) * 20;
      const time = item.dt_txt.substring(0,16);
    
      const listItem = document.createElement("li");
      listItem.textContent = `${time}: ${temperature}°`; //For security reasons, do not use innerHTML with external data coming along an API.


      let bgColor = tempToHSL(temperature);
/*      
      if (temperature < 0) {
        bgColor = "cornflowerblue";

      }
*/

      const tempBar = document.createElement("div");
      tempBar.classList.add("bar");  //To add a class named "bar", in this case, to the div "tempBar".
      tempBar.style.width = `${tempFix}px`;
      tempBar.style.backgroundColor = bgColor;

      listItem.appendChild(tempBar);

      CONTAINER.appendChild(listItem);

    }
  }


  function showError(error) {
    console.log(error);
  }

  function tempToHSL(temp, minTemp = -5, maxTemp = 50) {

    temp = Math.max(minTemp, Math.min(maxTemp, temp));

    const hue = ((maxTemp - temp) / (maxTemp - minTemp)) * 240;

    return `hsl(${hue}, 80%, 50%)`;
  }