function searchCity(city){
    let apiKey = "te659a2ao0cb8e3d11cb64043bff9883";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then();
}
function searchEngine (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    let cityElement = document.querySelector ("h1");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchEngine);
