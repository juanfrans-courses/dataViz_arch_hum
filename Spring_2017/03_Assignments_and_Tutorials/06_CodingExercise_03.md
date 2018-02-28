### Coding Exercise 3 - APIs
In this exercise you have a choice between two options:

#### Option A - Citibike System Capacity:
* Build a web-app that visualizes how full or empty the Citibike system currently is. By full or empty I mean how many empty docks there are ('empty') or how many available bikes there are. The important thing here is that stations tend to fill up or empty out pretty fast, so you want to know how full or empty the overall system is at any given moment.
* In addition to providing a general metric for the system, you should also highlight the stations that are either too full or too empty. What stations need attention?
* Think about this way, if you were the manager of the system, what would you like to know?
* All of this should be done with text and graphics, thinking carefully about layout, hierarchies, colors, fonts and visual representation of data.
* [Here](https://gbfs.citibikenyc.com/gbfs/gbfs.json) is the main Citibike GBFS feed, which links to all the other feeds in the system (similar to APIs) that respond to a similar `loadJSON()` function.
* You will probably want to use the following two feeds:
  * [Station status feed](https://gbfs.citibikenyc.com/gbfs/en/station_status.json)
  * [Station information feed](https://gbfs.citibikenyc.com/gbfs/en/station_information.json)
* Finally, and this is very important, you will want your app to update itself every minute or two, in order to stay up to date. To do this you will probably want to use the `setInterval()` function. This is a direct Javascript function (not p5), but you can still use it in your sketch. More information can be found [here](https://www.w3schools.com/jsref/met_win_setinterval.asp).

#### Option B - Classic Weather App:
* Build a compelling and interactive weather app using the OpenWeatherMap API.
* You should create graphics and text to represent the different weather conditions in different cities. Obviously, the graphics should respond and be tied to the data provided by the API.
* Think carefully about your graphic language and the overall layout of your web-app. Think about what information you would like to get from a service like this one and how to make it compelling and different.
* Also, don't be afraid to experiment and to focus on a particular aspect of the weather. This is not about replicating other weather apps but about doing something interesting, fun and different.
* Your weather app should work for all cities and for all kinds of weather conditions, so think about your extreme cases as well as your every day weather.

#### Deliverables
* Submit the URL to your sketch AND the URL to the Github repository where you have this sketch.

### Due Date
* Submit your exercise before the end of **Thursday, March 30**.
