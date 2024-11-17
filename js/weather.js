
const weatherDiv = document.getElementById("weather");
const API_KEY = window.env.API_KEY;

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            weatherDiv.textContent = `🚩${data.name} is ${data.weather[0].description} ,🌡 ${data.main.temp}°C`;
        })
        .catch(() => {
            onGeoError();
        });
}

function onGeoSuccess(position) {
    const { latitude, longitude } = position.coords;
    getWeather(latitude, longitude);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
    weatherDiv.textContent = "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
