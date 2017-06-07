import ZipCodeBox from './ZipCodeBox';
import React from 'react';

function NavBar(){
    return (
      <div className='navbar'>
        <h1>Clever Title</h1>
        <ZipCodeBox
          style={Object.assign({flexDirection: `row`})}/>
      </div>
    );
}

module.exports = NavBar;
