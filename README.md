# Forecast24

### Forecast is a NodeJS application for fetching and redering dynamic weather data. Forecast was a part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy.

### Forecast consumes two APIs:
  * Mapbox: to fetch geolocation
  * Open Weather Map: to fetch weather information

### Forecast handles request through two main endpoint:
  1. `/weather?address={place}`:
    * calls two main functions: forecast(), geolocation() to get the data.
    * returns a JSON formatted response with {place} weather details.
    * later, the application front-end renders the response to users as part of a beautiful responsive user interface.
  2. `/autolocation?lat={latitude}&long={longitude}`:
    * uses user's current location to fetch weather data for this location.
    * calls two main functions: forecast(), geolocation() to get the data.
    * returns a JSON formatted response with the user's current location weather details.
    * later, the application front-end renders the response to users as part of a beautiful responsive user interface.

### Tools:
  * Node.js
  * NPM
  * Asynchronous programming
  * ES6/ES7
  * Express
  * Application deployment with Heroku
  * Handlebars library 
