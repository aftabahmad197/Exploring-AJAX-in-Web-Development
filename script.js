function getWeather() {
  const apiKey = 'dfe435571b0d6f8d3db590dac4061ab3'; // Replace with your OpenWeatherMap API key
  const cityInput = document.getElementById('cityInput').value;
  const weatherResult = document.getElementById('weatherResult');

  // Ensure the user entered a city name
  if (cityInput.trim() === '') {
    alert('Please enter a city name.');
    return;
  }

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the API endpoint
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

  // Configure the request
  xhr.open('GET', apiUrl, true);

  // Set up a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayWeather(data);
    } else {
      alert('Error fetching weather data. Please try again.');
    }
  };

  // Send the request
  xhr.send();
}

function displayWeather(data) {
  const weatherResult = document.getElementById('weatherResult');
  weatherResult.innerHTML = `
    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
    <p>Description: ${data.weather[0].description}</p>
    <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}
