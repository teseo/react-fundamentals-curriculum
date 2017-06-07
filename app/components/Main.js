import React, {PropTypes} from 'react';
import ZipCodeBox from './ZipCodeBox';
import NavBar from './NavBar';

class Main extends React.Component {

  render() {
    var Background = 'app/images/pattern.svg';

    return (
      <div className='container'>
        <NavBar />
        <div className='home-container'
          style={{backgroundImage: `url(${Background})`}}>
          <h1 className='header'>Enter a City and State</h1>
            <ZipCodeBox
              style={Object.assign({flexDirection: `column`})}/>
        </div>
      </div>
  );
  }
}

module.exports = Main;
