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
