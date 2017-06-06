import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

class ZipCodeBox extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      city: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this);

  }
  getWeather(){
    console.log(this.state.city);
    api.getWeather(this.state.city)
  }

  handleChange(event){
      var city = event.target.value;
      this.setState(function(){
        return {
          city: city
        }
      });
    }
  render() {
    //
    var style = this.props.style;
    return (
      <div className='zipcode-container'
        style={style}>
          <input
            className='form-control'
            type='text'
            placeholder='St. George, Utah'
            onChange={this.handleChange}
            />
          <input
            type='button'
            className='btn btn-success'
            value='Get Weather'
            style={{margin: '10px'}}
            onClick={this.getWeather}
            />
      </div>
    );
  }
}

ZipCodeBox.propTypes = {
  style: PropTypes.object.isRequired
};

module.exports = ZipCodeBox;
