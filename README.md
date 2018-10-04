# WEATHER APP
## Instructions
### Move the HTTP REQUEST and the city details to the weather-forecast-list.  Aditionaly, extrapolate the displayed result within a weather-forecast component.

1. CREATE MODELS (Classes) WITH APPROPRIATE ATTRIBUTES FOR CityDetails and WeatherForecast

2. MAKE SURE TO ADD WEATHERBIT API KEY TO environments/environment.ts

3. ADD INPUT TO app.component.ts AND BIND THE searchText attribute IN THE app.component.ts TO
   THE INPUT ELEMENT

4. PASS USER SEARCH TEXT TO CHILD COMPONENT weather-forecast-list

5. CREATE getWeather() function IN the weather-forecast-list.component.ts.  ADD THE HTTP 
   REQUEST AS DONE IN LECTURE

6. ADD HTML TO THE weather-forecast.html TO DISPLAY A WEATHER FORECAST RESULT

7. ADD AN ITERATOR TO weather-forecast-list AND DISPLAY EACH WEATHER
   FORECAST RESULT <app-weather-forecast>
