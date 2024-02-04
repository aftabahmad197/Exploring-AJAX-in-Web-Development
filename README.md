# Steps to run the application locally

Obtain an OpenWeatherMap API Key:

1. Visit the OpenWeatherMap website and sign up for a free account.
2. After signing up, navigate to your account and obtain an API key. Replace 'YOUR_API_KEY' in script.js with this key.
   
Set Up a Local Server:
To avoid CORS issues, it's recommended to run the application using a local server.
If you have Python installed, you can use the following command in the terminal (make sure to navigate to the directory containing your files):

"python -m http.server"

This will start a simple HTTP server. Open your web browser and go to http://localhost:8000 to view your application.
Enter a City Name and Test:

Open the application in your web browser.
Enter the name of a city (e.g., "London") into the input field.
Click the "Get Weather" button.
The weather information for the specified city would be displayed as expected.

By following these steps, you should be able to run and test the AJAX-based weather application locally.
