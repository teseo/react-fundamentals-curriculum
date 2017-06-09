import React from 'react';
import {PropTypes} from 'prop-types';
import moment from 'moment';

class Details extends React.Component {
  render() {
    let cityData = this.props.location.state.cityData;
    let cityName = this.props.location.state.cityName;
    let icon = cityData.weather[0].icon;
    let description = cityData.weather[0].description;
    let date = cityData.dt;
    let min = cityData.temp.min;
    let max = cityData.temp.max;
    let humidity = cityData.humidity;
    return (
      <div className='city-details'>
          <div className='day-container'>
            <img className='icon' src={'../app/images/weather-icons/' + icon + '.svg'} />
            {moment.unix(date).format('dddd, MMMM D')}
          </div>
          <div className='forecast-description'>
            <p>{cityName}</p>
            <p>{description}</p>
            <p>min temp: {min} degrees</p>
            <p>max temp: {max} degrees</p>
            <p>humidity: {humidity}</p>
          </div>
      </div>
    );
  }
}

module.exports = Details;
