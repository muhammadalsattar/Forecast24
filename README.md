# Forecast24

### Forecast is a NodeJS application for fetching and redering dynamic weather data. Forecast was a part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy.

### Forecast consumes two APIs:
  * Mapbox: to fetch geolocation
  * Open Weather Map: to fetch weather information

### Forecast handles request through two main endpoint:
  1. `/weather?address={place}`: <br>
    ● calls two main functions: forecast(), geolocation() to get the data. <br>
    ● returns a JSON formatted response with {place} weather details. <br>
    ● later, the application front-end renders the response to users as part of a beautiful responsive user interface. <br>
  2. `/autolocation?lat={latitude}&long={longitude}`: <br>
    ● uses user's current location to fetch weather data for this location. <br>
    ● calls two main functions: forecast(), geolocation() to get the data. <br>
    ● returns a JSON formatted response with the user's current location weather details. <br>
    ● later, the application front-end renders the response to users as part of a beautiful responsive user interface. <br>

### Tools:
  * Node.js
  * NPM
  * Asynchronous programming
  * ES6/ES7
  * Express
  * Application deployment with Heroku
  * Handlebars library 
