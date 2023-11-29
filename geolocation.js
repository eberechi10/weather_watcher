
const OPENWEATHER_API_KEY = 'fb7801f2ffed82b9101c28050f369827';

function getCityName(latitude, longitude) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}`;

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

getCityName(latitude, longitude)
    .then(city => {
        console.log('City:', city);
        // Use the city name as needed in your application
    });
