// Import required modules
import dotenv from 'dotenv';

// Check if running in Node.js or the browser
const isNode = typeof window === 'undefined';

// If running in Node.js, load environment variables from .env file
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
        temperatureElement.textContent = `Temperature: ${weatherData.temperature}`;
        conditionElement.textContent = `Condition: ${weatherData.condition}`;
        timeElement.textContent = `Time: ${weatherData.time}`;
    } else {
        // Handle server-side rendering or other scenarios
        console.log(weatherData);
    }
}

// Export the functions for use in other modules
export { showLoading, hideLoading, displayWeather };
