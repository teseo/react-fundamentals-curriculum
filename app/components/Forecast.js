import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import api from '../utils/api';
import moment from 'moment'
import Navigation  from 'react-router';

function ForecastCard(props){
  let icon = props.icon;
  let forecastImage = 'app/images/weather-icons/' + icon + '.svg';

  let date = props.date;
  return (
     <div className='forecast-card'>
       <img
         src={forecastImage}
         className='weather'/>
       <h2 className='forecast-card-date'>{moment.unix(date).format('dddd, MMMM D')}</h2>

     </div>
   );
}
ForecastCard.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}

class Forecast extends React.Component {

  constructor(props){
    super(props);
    var params = queryString.parse(props.location.search);

    this.state = {
      loading: false,
      city: params.city,
      forecastData: null
    }
  }

  componentDidMount() {
    this.setState(()=>{
      return {
        loading: !this.state.loading
      }
    });
    this.getForecast(this.state.city)
    .then( (city) => {
      this.setState(()=>{
        return {
          loading: !this.state.loading,
          forecastData: city.data
        }
      });
    });
  }

  getForecast(city){
    return api.getForecast(city);
  }

  handleClick(event){
    console.log('sss');
    this.setState({redirect: true});
  }

  render(){
    var isLoading = this.state.loading;
    var forecastData = this.state.forecastData;
    var city = this.state.city;
    if (this.state.redirect) {
    //  return <Navigation push to={'/details/' + city}  />;
    //  return <Navigation push to={'/details/' + city}  />;
    }
    return (
      <div className='container'
        onClick={ event => this.handleClick(event)}
    >
        <NavBar />
        {isLoading === true ? <div>loading...</div> :''}
          {forecastData &&
            <div className ='forecast-container'>
              <h1 className='forecast-header'>{city}</h1>
              <div className = 'forecast-card-list'>
                {forecastData.list.map((day) => {
                  
                  return <ForecastCard
                    date={day.dt}
                    key={day.dt}
                    icon={day.weather[0].icon} />
                })}
              </div>
            </div>}
      </div>
    )
  }
}

module.exports = Forecast;
