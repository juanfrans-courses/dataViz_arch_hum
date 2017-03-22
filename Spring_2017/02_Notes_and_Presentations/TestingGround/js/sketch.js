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
