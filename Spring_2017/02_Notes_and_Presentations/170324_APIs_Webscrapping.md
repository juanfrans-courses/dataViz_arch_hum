## Notes 03/124/2017 - APIs and Webscrapping

### Plan
* [Tumblr blog](https://dataviz2017spring.tumblr.com/)
* Demo:
  * Explain what APIs are
  * Talk about the JSON format (and XML or txt)
  * Load a JSON file that's stored
  * Create the sketch with the JSON file
  * Query the API to get the updated JSON file
  * Update the sketch so that it queries the API every x milliseconds
  * How to sort the array
* Go over some of the assignments

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

### Loading and working with a JSON file
* We will use the [`loadJSON`](http://p5js.org/reference/#/p5/loadJSON) function. Because Javascript is asynchronous is important to place this function initially inside the `preload` function.
* This tutorial follows Daniel Shiffman's [video tutorials](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r) on how to query APIs with p5.
```js
// ***** Global variables ***** //
var weatherData;

// ***** Preload function ****** //
function preload(){
  weatherData = loadJSON('../data/weather.json');
}

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    console.log(weatherData.main.temp);
}

// ***** Draw function ***** //
function draw(){
    background(255);
}
```
* Another option is to use the `callback` option in the function to trigger another function once the file has been loaded.
```js
// ***** Global variables ***** //
var weatherData;

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    loadJSON('../data/weather.json', getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  console.log(weatherData.main.temp);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    if (weatherData) {
      text(weatherData.main.temp, 20, 20);
    }
    else{
      text('Loading...', 20, 20);
    }
}
```
### Creating a simple weather app
* Now we will create a simple live weather app. First, we need to build the requests and query the API directly.
```js
// ***** Global variables ***** //
var weatherData;
var apiKey = 'put your api key here';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'New York';
var units = 'metric';

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    var request = baseURL + city + '&units=' + units + '&apikey=' + apiKey;
    loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  console.log(weatherData.main.temp);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    if (weatherData) {
      text(weatherData.main.temp, 20, 20);
    }
    else{
      text('Loading...', 20, 20);
    }
}
```
* Now let's build some super simple visualization that represents the current temperature.
```js
// ***** Global variables ***** //
var weatherData;
var apiKey = '6b7f88ea398f85994ccb7cab38d16545';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Sydney';
var units = 'metric';
var maxTemp = 40;
var minTemp = -5;
var maxColor = 360;
var minColor = 240;
var currentTemp = 0;
var currentHumidity = 0;

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    colorMode(HSB);
    var request = baseURL + city + '&units=' + units + '&apikey=' + apiKey;
    loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  currentTemp = weatherData.main.temp;
  currentHumidity = weatherData.main.humidity;
  // console.log(weatherData.main.temp);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    if (weatherData) {
      noStroke();
      fill(0);
      text('The current temperature in ' + city + ' is ' + str(currentTemp) + ' C', 20, 20);
      text('The current humidity in ' + city + ' is ' + str(currentHumidity) + '%', 20, 40);
      var hueColor = map(currentTemp, minTemp, maxTemp, minColor, maxColor);
      fill(hueColor, 100, 100);
      ellipse(100, 100, currentHumidity, currentHumidity);
    }
    else{
      text('Loading...', 20, 20);
    }
}
```

### Adding user input to the app
* Now let's add some way for the user to query different cities.
* First, let's modify the HTML to create the actual input.
* It is very important to add the p5.dom.js library to the sketch, to be able to query HTML elements.
```html
<script language="javascript" type="text/javascript" src="../libraries/addons/p5.dom.js"></script>
<p>Query the OpenWeatherMap API for: <input id="city" value="New York"></input><button id="submit">Query</button></p>
```
* Now, let's link those html elements to our p5 sketch:
```js
// ***** Global variables ***** //
var weatherData;
var apiKey = '6b7f88ea398f85994ccb7cab38d16545';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Sydney';
var units = 'metric';
var maxTemp = 40;
var minTemp = -5;
var maxColor = 360;
var minColor = 240;
var currentTemp = 0;
var currentHumidity = 0;
var button;
var cityInput;

// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    colorMode(HSB);
    button = select('#submit');
    cityInput = select('#city');
    button.mousePressed(queryAPI);
}

function queryAPI(){
  var request = baseURL + cityInput.value() + '&units=' + units + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  currentTemp = weatherData.main.temp;
  currentHumidity = weatherData.main.humidity;
  city = cityInput.value();
  // console.log(weatherData.main.temp);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    if (weatherData) {
      noStroke();
      fill(0);
      text('The current temperature in ' + city + ' is ' + str(currentTemp) + ' C', 20, 20);
      text('The current humidity in ' + city + ' is ' + str(currentHumidity) + '%', 20, 40);
      var hueColor = map(currentTemp, minTemp, maxTemp, minColor, maxColor);
      fill(hueColor, 100, 100);
      ellipse(100, 100, currentHumidity, currentHumidity);
    }
    else{
      text('Loading...', 20, 20);
    }
}
```

### Other
* Show how `wget` works to download things.
* `jsonp` --> json 'padding'
* Another option is the [HTTP GET](http://p5js.org/reference/#/p5/httpGet) function, which works for xml and txt files too.
* `setTimeout()`: trigger an event x milliseconds from now.
* `setInterval()`: trigger event over and over every x milliseconds (use this to query Citibike every 2 minutes or something like that).

### Useful Links
* [JSON Formatter](https://jsonformatter.curiousconcept.com/) (to validate the format of your JSON file).
* [JSON Formatter Chrome extension](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwiI1-2I-t3SAhVJ44MKHSYiByEQFggaMAA&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fjson-formatter%2Fbcjindcccaagfpapjjmafapmmgkkhgoa%3Fhl%3Den&usg=AFQjCNGekvob_9H0vur64fEZBE3lLyZJzg&sig2=GuFYHAEjqyqW0OGJdSj0cQ) (to view "pretty" JSON in Chrome)
* Dan Shiffman [Working with Data Videos](https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r)
* [Corpora](https://github.com/dariusk/corpora) repository of JSON data.
* [Critical APIs](https://github.com/lmccart/itp-critical-apis) course at ITP.
* Some more APIs:
  * [ProgrammableWeb](http://www.programmableweb.com/)
  * [Wikipedia list of open APIs](http://en.wikipedia.org/wiki/List_of_open_APIs)
  * [Another list of open APIs](https://gist.github.com/afeld/4952991)
  * [The Guardian](http://www.theguardian.com/open-platform)
  * [flickr](https://www.flickr.com/services/api/)
  * [MTA](http://web.mta.info/developers/developer-data-terms.html#data)
  * [Sunlight Foundation](http://sunlightfoundation.com/api/)
  * [API Evangelist](http://apievangelist.com/)
  * [Museum APIs list](http://museum-api.pbworks.com/w/page/21933420/Museum%C2%A0APIs)
