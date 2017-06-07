import axios from 'axios';

function handleError(error) {
  console.warn(error);
  return null;
}
function getWeather(city){
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=5902e987084211ae3f2fe0ed9fbafca9';
  axios.get(url)
  .then(function(response){
    console.log(response);
  })
  .catch(handleError);
}
function getForecast(city){
  let url =  'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&type=accurate&APPID=5902e987084211ae3f2fe0ed9fbafca9&cnt=5';
  return axios.get(url)
  .then(function(city){
      return city;
  })
  .catch(handleError);
}


module.exports = {
  getWeather: getWeather,
  getForecast: getForecast
};
