function search (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-text");
    let h1 = document.querySelector ("h1");
    h1.innerHTML = searchInput.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);