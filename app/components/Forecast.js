import React from 'react';
import {PropTypes} from 'prop-types';
import queryString from 'query-string';
import api from '../utils/api';
import moment from 'moment';

function ForecastCard(props){
  let icon = props.icon;
  let date = props.date;

  return(
    <div className='forecast-card' onClick={props.onClick} >
      <img className='icon' src={'app/images/weather-icons/' + icon + '.svg'} />
        {moment.unix(date).format('dddd, MMMM D')}
    </div>
  )
}
ForecastCard.propTypes = {
  icon : PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
};
class Forecast extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      forecastData: [],
      loading: true
    }
  }
  componentDidMount(){
    var city = queryString.parse(this.props.location.search).city;
    this.setState(()=>{
      return {
        loading:true
      }
    });
    this.makeRequest(city);
  }
  componentWillReceiveProps(nextProps) {
   var city = queryString.parse(nextProps.location.search).city;
   this.setState(()=>{
     return {
       loading: true
     }
   });
   this.makeRequest(city);
  }
  makeRequest(city){
    api.getForecast(city)
    .then((response) => {
      this.setState(()=>{
        return {
          forecastData: response.data,
          loading:false
        }
      });
    });
  }
  render(){
    if(this.state.loading) {
      return(<div>loading...</div>)
    }
    let forecastList = this.state.forecastData.list;
    let city = this.state.forecastData.city;
    let cityName = this.state.forecastData.city.name;
    return(
        <div className='forecast-list-container'>
          <h1 className='header-list'>{city.name}</h1>
          <div className='forecast-list'>
            {forecastList.map( (day,index) => {
              return (
                <ForecastCard
                  icon = {day.weather[0].icon}
                  key = {day.dt}
                  date = {day.dt}
                  city = {city.name}
                  onClick={() =>{
                      this.props.history.push({
                        pathname: 'details/' + cityName,
                        state: {
                          cityData: forecastList[index],
                          cityName: cityName
                        }
                      })
                  }}/>
              )
            })}
          </div>
        </div>
    )
  }
}

Forecast.propTypes = {
};

module.exports = Forecast;
