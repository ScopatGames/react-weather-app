import axios from 'axios';
var apiKey = '6bf6d73a839b6ac655a55235216b2f2b';

function getCurrentWeather(city){
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID='+apiKey);
}

function getFiveDayForecast(city){
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=' + apiKey + '&cnt=5');
}

function getCurrentWeatherData(city){
  return getCurrentWeather(city)
    .then(function(object){
      return object.data;
    }).catch(function(err){
      console.warn('Error in getCurrentWeatherData', err)
    });
}

function getFiveDayForecastData(city){
  return getFiveDayForecast(city)
    .then(function(object){
      return object.data;
    }).catch(function(err){
      console.warn('Error in getFiveDayForecastData', err)
    });
}

export let weatherHelpers = {
  getCurrentWeather: getCurrentWeatherData,
  getFiveDayForecast: getFiveDayForecastData,
  getBoth: function(city){
    return axios.all([getCurrentWeatherData(city), getFiveDayForecastData(city)])
      .catch(function(err){
        console.warn('Error in getBoth', err)
      });
  }
};
