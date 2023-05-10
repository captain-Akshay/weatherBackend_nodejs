# Weather API Backend

This is an Express.js backend for a weather application. It uses the OpenWeatherMap API to fetch weather data for a given location.

## Getting Started

To get started with this project, you will need to have Node.js and npm installed on your system. You will also need to create a `.env` file in the root directory of the project and add your OpenWeatherMap API key to it:

###WEATHERAPI=your_api_key_here

After setting up the environment variables, you can run the following commands to start the server:

npm install
node server.js

The server will start listening on port 3001 by default, or the `PORT` specified in the environment variables.

## Endpoints

The backend provides a single endpoint that returns weather data for a given location:

###GET /:location

You can make a GET request to this endpoint with the `location` parameter set to the name of the city or location for which you want to fetch weather data. The response will be a JSON object containing the weather data for the specified location.

## Dependencies

This project uses the following dependencies:

- express
- fetch
- body-parser
- dotenv
- cors
- helmet

You can install these dependencies using npm:

npm install express fetch body-parser dotenv cors helmet
