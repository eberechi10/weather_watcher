// app.js

// Function to show the loading image
function showLoading() {
    document.getElementById('loading-container').style.display = 'block';
}

// Function to hide the loading image
function hideLoading() {
    document.getElementById('loading-container').style.display = 'none';
}

// Fetch weather data
function fetchWeather(location) {
    showLoading(); // Show loading image while fetching data

    // Simulate an asynchronous request (replace this with your actual API request)
    setTimeout(() => {
        // Simulating a successful response with weather data (replace this with actual data)
        const weatherData = {
  // Function to display weather data
function displayWeather(weatherData) {
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
    const timeElement = document.getElementById('time');

    // Display weather data in corresponding HTML elements
    temperatureElement.textContent = `Temperature: ${weatherData.temperature}`;
    conditionElement.textContent = `Condition: ${weatherData.condition}`;
    timeElement.textContent = `Time: ${weatherData.time}`;
}

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

// Event listener for a button click
document.getElementById('get-weather-button').addEventListener('click', function () {
    const location = document.getElementById('location-input').value;
    fetchWeather(location);
});
