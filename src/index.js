function displayWeather (response) {
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = Math.round(response.data.temperature.current);
    temperatureElement.innerHTML = temperature;
    let cityElement = document.querySelector ("h1");
    cityElement.innerHTML = response.data.city;
}

function searchCity(city){
    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
}
function searchEngine (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);
