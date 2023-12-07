#!/usr/bin/env node
// weather.js

// Import required modules
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Check if running in Node.js or the browser
const isNode = typeof window === 'undefined';

// Load environment variables if running in Node.js
if (isNode) {
    dotenv.config();
}

// Function to show the loading image
function showLoading() {
    console.log('Loading...');
}

// Function to hide the loading image
function hideLoading() {
    console.log('Loading hidden.');
}

// Function to display weather data
function displayWeather(weatherData) {
    console.log('Weather Data:', weatherData);
}

// Fetch weather data
function fetchWeather(location) {
    showLoading(); // Show loading image while fetching data

    // Simulate an asynchronous request (replace this with your actual API request)
    setTimeout(() => {
        // Simulating a successful response with weather data (replace this with actual data)
        const weatherData = {
            temperature: '25°C',
            condition: 'Sunny',
            time: '12:00 PM'
        };

        // Process and display weather data
        displayWeather(weatherData);
        // Hide loading image when data is received
        hideLoading();
    }, 2000); // Simulating a 2-second delay
}

// Event listener for a button click (only if running in the browser)
if (!isNode) {
    document.getElementById('get-weather-button').addEventListener('click', function () {
        const location = document.getElementById('location-input').value;
        fetchWeather(location);
    });
}

// Run the fetchWeather function if in Node.js environment
if (isNode) {
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
                console.error('Weather API error:', error);
            });
    }

    function updateWeatherInfo(data) {
        // Extract relevant data from the API response
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const time = new Date(data.dt * 1000).toLocaleTimeString();

        // Update the corresponding HTML elements with the extracted data
        console.log('Temperature:', temperature, 'K');
        console.log('Condition:', condition);
        console.log('Time:', time);
    }
}
