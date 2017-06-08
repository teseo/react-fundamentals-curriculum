import React from 'react';

class ZipBox extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }
  handleChange (event){
    let city = event.target.value;
    this.setState(()=>{
      return {
        city: city
      }
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

module.exports = ZipBox;
