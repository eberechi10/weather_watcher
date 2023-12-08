#!/usr/bin/env node
// geolocation.js

// Import required modules
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Check if running in Node.js or the browser
const isNode = typeof window === 'undefined';

// Load environment variables if running in Node.js
if (isNode) {
    dotenv.config();
}

function getCityName(latitude, longitude) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY2}`;

    // Make a fetch request to the OpenWeatherMap API
    return fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            // Extract the city name from the API response
            const city = data.name;
            return city;
        })
        .catch(error => {
            console.error('Error fetching city name:', error);
            return null; // Return null in case of an error
        });
}

// Example usage
// Assuming you have latitude and longitude values
const latitude = 40.7128;
const longitude = -74.0060;

// Run the function if in Node.js environment
if (isNode) {
    getCityName(latitude, longitude)
        .then(city => {
            console.log('City:', city);
            // Use the city name as needed in your application
        });
}

// Export the function for use in other modules
export { getCityName };
