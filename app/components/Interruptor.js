import React from 'react';
import Casillero from './Casillero';

class Interruptor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      switchOne: true,
      switchTwo: false,
    }
  }
  handleClick(switchToTurnOff){
    this.setState(()=>{
      let interruptor = {};
      interruptor[switchToTurnOff] = !this.state[switchToTurnOff]
      return interruptor
    });
  }

  render() {
    return (
        <div>
          <Casillero
            inputValue={this.state.switchOne}
            onClick={() => this.handleClick('switchTwo')}/>
          <Casillero
            inputValue={this.state.switchTwo}
            onClick={() => this.handleClick('switchOne')}/>
        </div>
    );
  }
}

module.exports = Interruptor;
