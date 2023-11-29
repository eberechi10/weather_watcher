// weather.js
require('dotenv').config();

const OPENWEATHERMAP_API_KEY1 = process.env.OPENWEATHERMAP_API_KEY1;

function fetchWeather(location) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHERMAP_API_KEY1}`;
    fetchWeatherData(endpoint);
}

function fetchWeatherByCoords(latitude, longitude) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY1}`;
    fetchWeatherData(endpoint);
}

function fetchWeatherData(endpoint) {
    // Show loading image while fetching data
    showLoading();

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            // Hide loading image when data is received
            hideLoading();

            // Update weather information in the HTML
            updateWeatherInfo(data);
        })
        .catch(error => {
            // Hide loading image in case of an error
            hideLoading();

            // Display an error message
            alert('Error fetching weather data. Please try again.');
            console.error('Weather API error:', error);
        });
}

function updateWeatherInfo(data) {
    // Extract relevant data from the API response
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const time = new Date(data.dt * 1000).toLocaleTimeString();

    // Update the corresponding HTML elements with the extracted data
    document.getElementById('temperature').innerText = `Temperature: ${temperature} K`;
    document.getElementById('condition').innerText = `Condition: ${condition}`;
    document.getElementById('time').innerText = `Time: ${time}`;
}
