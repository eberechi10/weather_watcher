// weather.mjs

// Import required modules
import fetch from 'isomorphic-fetch'; // or 'node-fetch'
import dotenv from 'dotenv';

// Check if running in Node.js or the browser
const isNode = typeof window === 'undefined';

// Load environment variables if running in Node.js
if (isNode) {
    dotenv.config();
}

// Function to show the loading image
function showLoading() {
    // Check if document is available (browser environment)
    if (!isNode) {
        document.getElementById('loading-container').style.display = 'block';
    }
}

// Function to hide the loading image
function hideLoading() {
    // Check if document is available (browser environment)
    if (!isNode) {
        document.getElementById('loading-container').style.display = 'none';
    }
}

// Function to display weather data
function displayWeather(weatherData) {
    // Check if document is available (browser environment)
    if (!isNode) {
        const temperatureElement = document.getElementById('temperature');
        const conditionElement = document.getElementById('condition');
        const timeElement = document.getElementById('time');

        // Display weather data in corresponding HTML elements
        temperatureElement.textContent = `Temperature: ${weatherData.temperature} K`;
        conditionElement.textContent = `Condition: ${weatherData.condition}`;
        timeElement.textContent = `Time: ${weatherData.time}`;
    } else {
        // Handle server-side rendering or other scenarios
        console.log(weatherData);
    }
}

// Export functions for use in other modules
export function getWeather(location) {
    const OPENWEATHERMAP_API_KEY1 = process.env.OPENWEATHERMAP_API_KEY1;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHERMAP_API_KEY1}`;
    fetchWeatherData(endpoint);
}

export function getCurrentLocation() {
    // Assume you have functions to get latitude and longitude
    const latitude = getLatitude(); // Replace with your logic
    const longitude = getLongitude(); // Replace with your logic
    const OPENWEATHERMAP_API_KEY1 = process.env.OPENWEATHERMAP_API_KEY1;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY1}`;
    fetchWeatherData(endpoint);
}

export function fetchWeatherByCoords(latitude, longitude) {
    const OPENWEATHERMAP_API_KEY1 = process.env.OPENWEATHERMAP_API_KEY1;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY1}`;
    fetchWeatherData(endpoint);
}

export function fetchWeatherData(endpoint) {
    // Show loading image while fetching data
    showLoading();

    // Use window.fetch in the browser environment
    const fetchMethod = isNode ? fetch : window.fetch;

    fetchMethod(endpoint)
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
            console.error('Weather API error:', error);
        });
}

export function updateWeatherInfo(data) {
    // Extract relevant data from the API response
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const time = new Date(data.dt * 1000).toLocaleTimeString();

    // Update the corresponding HTML elements with the extracted data
    displayWeather({
        temperature,
        condition,
        time
    });
}
