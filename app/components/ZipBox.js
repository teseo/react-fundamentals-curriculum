import React from 'react';
import {PropTypes} from 'prop-types';

class ZipBox extends React.Component{

  constructor() {
    super();

    this.state = {
      city: ''
    }
  }
  handleChange (event){
    let city = event.target.value;
    this.setState({
      city: city
    });
  }
  handleClick (event){
    this.props.submitZipBox(this.state.city);
  }
  render (){
    let contanerClassName = this.props.className;
    let direction = this.props.direction;
    return(
      <div
        className={contanerClassName}
        style={{flexDirection: direction}}>
              <input
                  type='text'
                  className='form-control'
                  placeholder='St George Utah'
                  value={this.state.city}
                  onChange={event => this.handleChange(event)}/>

              <input type='button'
                  className='btn btn-success'
                  value = 'Get Weather'
                  onClick={event => this.handleClick(event)}/>
      </div>
    );
  }
}

ZipBox.propTypes ={
  className: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  submitZipBox: PropTypes.func.isRequired,
}
module.exports = ZipBox;
