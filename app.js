function updateWeather (res) {
    let temperature = document.querySelector("#temperature")
    let currentTemp = res.data.temperature.current;
    let city = document.querySelector("#display-city");
    city.innerHTML = res.data.city

    temperature.innerHTML = Math.round(currentTemp)
    console.log(currentTemp)
}


function searchCity (city) {
    let apiKey = "016a0t85f68c4oda9e60b9cd7345774b"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(updateWeather);
}


function searchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input")
    searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", searchSubmit)

searchCity("Los Angeles")