# Notes Week 7 (March 2, 2018) - Interactivity and APIs
* Blog

## Discussion - Readings
* *Kirk, Andy, Data Visualization, Chapter 7 "Interactivity"*
* *Lupi, Giorgia, ["Data Humanism, the Revolution with be Visualized"](https://medium.com/@giorgialupi/data-humanism-the-revolution-will-be-visualized-31486a30dbfb)*

## Presentation by Emily Fuhrman

## Interactivity and APIs
### APIs
* API stands for "Application Programing Interface" and it is a way of letting programs talk to each other. For example, you are Twitter and you want people to post content to your platform from other sites; you then write an API that let's people (the owners of the sites) interact with your service and post content remotely. Or you can also let them get some tweets from your platform to display on their site. Your API needs to be able to let people "post", "get" and "search" Twitter. These are methods, and each API has a documentation that will tell you how to write the query in order to do this.
* In our topic, APIs are best for data that is constantly being updated. You are not loading a file and always the same file, you are querying a service that will give you the most updated data based on your request.
* There are two more things to take into account when dealing with APIs:
  * Authentication: you might need to sign up for a developer account to be able to use the API and you might need to program your code so that it identifies itself and gets authenticated by the API.
  * Rate limits: most APIs are free but they have rate limits, there are only so many requests you can submit in any given timeframe. Be careful with these rate limits. You might need to program your code so that it pauses between requests.
* Here are some very common APIs that people use and some of the things you can do through them (there are many many many more...):
  * [Twitter](https://dev.twitter.com/rest/public):
    * Search
    * Post
    * Get information (status, followers, etc)
  * [Google Maps](https://developers.google.com/maps/):
    * Get directions
    * Geocode addresses
  * [Foursquare](https://developer.foursquare.com/docs/):
    * Search for venues
    * Post
  * [Instagram](https://www.instagram.com/developer/):
    * Get user information
    * Get location information, including media
  * [New York Times](http://developer.nytimes.com/):
    * Search for articles
    * Get access to comments
  * [OpenWeatherMap](http://openweathermap.org/API):
    * Current weather
    * Historical weather
  * [Zillow](https://www.zillow.com/howto/api/APIOverview.htm):
    * Get estimates
    * Search for properties
  * [Google Sheets](https://developers.google.com/sheets/api/):
    * Use data on your Google Sheets
    * Post data to your Google Sheets

### JSON and XML Formats
* JSON is the most common type of format used by APIs. It stands for Javascript Object Notation, so it's actually perfectly suited for our coding environment.
* The other common format for APIs is XML, eXtensible Markup Language.
* Here's what a JSON file looks like (this is from [Citibike](https://feeds.citibikenyc.com/stations/stations.json)):
```json
{
  "executionTime": "2017-03-21 01:56:21 PM",
  "stationBeanList": [
    {
      "id": 72,
      "stationName": "W 52 St & 11 Ave",
      "availableDocks": 37,
      "totalDocks": 39,
      "latitude": 40.76727216,
      "longitude": -73.99392888,
      "statusValue": "In Service",
      "statusKey": 1,
      "availableBikes": 2,
      "stAddress1": "W 52 St & 11 Ave",
      "stAddress2": "",
      "city": "",
      "postalCode": "",
      "location": "",
      "altitude": "",
      "testStation": false,
      "lastCommunicationTime": "2017-03-21 01:55:35 PM",
      "landMark": ""
    },
    {
      "id": 79,
      "stationName": "Franklin St & W Broadway",
      "availableDocks": 9,
      "totalDocks": 33,
      "latitude": 40.71911552,
      "longitude": -74.00666661,
      "statusValue": "In Service",
      "statusKey": 1,
      "availableBikes": 22,
      "stAddress1": "Franklin St & W Broadway",
      "stAddress2": "",
      "city": "",
      "postalCode": "",
      "location": "",
      "altitude": "",
      "testStation": false,
      "lastCommunicationTime": "2017-03-21 01:53:02 PM",
      "landMark": ""
    }
  ]
}
```
* Here's an example of an XML response (from Zillow):
```xml
<SearchResults:searchresults xsi:schemaLocation="http://www.zillow.com/static/xsd/SearchResults.xsd /vstatic/ae1bf8a790b67ef2e902d2bc04046f02/static/xsd/SearchResults.xsd">
  <request>
    <address>2114 Bigelow Ave</address>
    <citystatezip>Seattle, WA</citystatezip>
  </request>
  <message>
    <text>Request successfully processed</text>
    <code>0</code>
  </message>
  <response>
    <results>
      <result>
        <zpid>48749425</zpid>
        <links>
          <homedetails>
            http://www.zillow.com/homedetails/2114-Bigelow-Ave-N-Seattle-WA-98109/48749425_zpid/
          </homedetails>
          <graphsanddata>
            http://www.zillow.com/homedetails/charts/48749425_zpid,1year_chartDuration/?cbt=7522682882544325802%7E9%7EY2EzX18jtvYTCel5PgJtPY1pmDDLxGDZXzsfRy49lJvCnZ4bh7Fi9w**
          </graphsanddata>
          <mapthishome>http://www.zillow.com/homes/map/48749425_zpid/</mapthishome>
          <comparables>http://www.zillow.com/homes/comps/48749425_zpid/</comparables>
        </links>
        <address>
          <street>2114 Bigelow Ave N</street>
          <zipcode>98109</zipcode>
          <city>Seattle</city>
          <state>WA</state>
          <latitude>47.63793</latitude>
          <longitude>-122.347936</longitude>
        </address>
        <zestimate>
          <amount currency="USD">1219500</amount>
          <last-updated>11/03/2009</last-updated>
          <oneWeekChange deprecated="true"/>
          <valueChange duration="30" currency="USD">-41500</valueChange>
          <valuationRange>
            <low currency="USD">1024380</low>
            <high currency="USD">1378035</high>
          </valuationRange>
          <percentile>0</percentile>
        </zestimate>
        <localRealEstate>
          <region id="271856" type="neighborhood" name="East Queen Anne">
            <zindexValue>525,397</zindexValue>
            <zindexOneYearChange>-0.144</zindexOneYearChange>
            <links>
              <overview>
                http://www.zillow.com/local-info/WA-Seattle/East-Queen-Anne/r_271856/
              </overview>
              <forSaleByOwner>
                http://www.zillow.com/homes/fsbo/East-Queen-Anne-Seattle-WA/
              </forSaleByOwner>
              <forSale>
                http://www.zillow.com/east-queen-anne-seattle-wa/
              </forSale>
            </links>
          </region>
          <region id="16037" type="city" name="Seattle">
            <zindexValue>381,764</zindexValue>
            <zindexOneYearChange>-0.074</zindexOneYearChange>
            <links>
              <overview>
                http://www.zillow.com/local-info/WA-Seattle/r_16037/
              </overview>
              <forSaleByOwner>http://www.zillow.com/homes/fsbo/Seattle-WA/</forSaleByOwner>
              <forSale>http://www.zillow.com/seattle-wa/</forSale>
            </links>
          </region>
          <region id="59" type="state" name="Washington">
            <zindexValue>263,278</zindexValue>
            <zindexOneYearChange>-0.066</zindexOneYearChange>
            <links>
              <overview>
                http://www.zillow.com/local-info/WA-home-value/r_59/
              </overview>
              <forSaleByOwner>http://www.zillow.com/homes/fsbo/WA/</forSaleByOwner>
              <forSale>http://www.zillow.com/wa/</forSale>
            </links>
          </region>
        </localRealEstate>
      </result>
    </results>
  </response>
</SearchResults:searchresults>
```

### Setup
This is the starting `.html` template. Also, note that in our `js` folder we **need to include the `p5.dom` library**.
```html
<!DOCTYPE html>
<html>
  <head>
    <title>p5.js Weather App</title>
    <!-- Google fonts code -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet">
    <!-- Link to the p5.js library -->
    <script language="javascript" type="text/javascript" src="js/p5.js"></script>
    <script language="javascript" type="text/javascript" src="js/p5.dom.js"></script>
    <!-- Link to p5 sketch file -->
    <script language="javascript" type="text/javascript" src="js/sketch.js"></script>
  </head>
  <body>
    <div class="title">
      <h1>A Weather App</h1>
    </div>
  </body>
</html>
```

### Creating the HTML Buttons
Creating `html` buttons is extremely simple, and as all `html` elements they can also be formatted with `css`.
* Here is a very basic example: `<p>Query the OpenWeatherMap API for: <input id="city" value="New York"></input><button id="submit">Query</button></p>`

### Basic Querying of the API
Here is a super basic p5.js sketch that queries the OpenWeatherMap api:
```js
// **** Global Variables ***** //
var apiKey = 'your api key here';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;

// **** Preload Function **** //
function preload(){
  var request = baseURL + 'New York' + '&apikey=' + apiKey;
  weatherData = loadJSON(request);
  print(weatherData);
}

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  noLoop();
}

function draw(){
  background(225);
}
```

### Extracting Information from the API
Now that we are communicating with the API and getting a response, we can start extracting information from that response:
```js
// **** Global Variables ***** //
var apiKey = 'your api key here';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;

// **** Preload Function **** //
function preload(){
  var request = baseURL + 'New York' + '&apikey=' + apiKey;
  weatherData = loadJSON(request);
  print(weatherData);
}

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  noLoop();
}

function draw(){
  background(225);
  var description = weatherData.weather[0].description;
  var temperature = weatherData.main.temp;
  var humidity = weatherData.main.humidity;
  var pressure = weatherData.main.pressure;
  text('The current weather for New York City is:', 50, 50);
  text(description, 80, 70);
  text(temperature + ' F', 80, 90);
  text(humidity + '% humidity', 80, 110);
  text(pressure + ' hPa (pressure)', 80, 130);
}
```

### Putting It All Together
Here's the final code where it all comes together. The most important change is to take the querying of the API out of the setup function and create it's own function (actually two functions) with a callback.
```js
// **** Global Variables ***** //
var apiKey = '2cc644b72651ec3e1a71f43f9f089e55';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var weatherData;
var button;
var cityInput;
var description = '';
var temperature = 0;
var humidity = 0;
var pressure = 0;

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].description;
  temperature = weatherData.main.temp;
  humidity = weatherData.main.humidity;
  pressure = weatherData.main.pressure;
  print(weatherData);
  redraw();
}

// **** Draw Function **** //
function draw(){
  background(225);
  if (weatherData){
    text('The current weather for ' + cityInput.value() + ' is:', 50, 50);
    text(description, 80, 70);
    text(temperature + ' F', 80, 90);
    text(humidity + '% humidity', 80, 110);
    text(pressure + ' hPa (pressure)', 80, 130);
  }
}
```
