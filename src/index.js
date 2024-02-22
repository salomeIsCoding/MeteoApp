function search (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    let cityElement = document.querySelector ("h1");
    cityElement.innerHTML = searchInput.value;

    axios.get(apiUrl).then();
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

