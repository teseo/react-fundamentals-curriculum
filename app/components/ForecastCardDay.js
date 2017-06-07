import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar';
import { browserHistory } from 'react-router';

class ForecastCardDay extends React.Component{
  render() {
    return (
      <div className='container'>
          <NavBar />
          <div>foto</div>
          <div>date</div>
          <div>city</div>
          <div>sky is clear</div>
          <div>min temp</div>
          <div>max temp</div>
          <div>humidity</div>
      </div>
    );
  }
}
//
// ForecastCardDay.propTypes = {
//   date: PropTypes.number.isRequired,
//   icon: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// }

module.exports = ForecastCardDay;
