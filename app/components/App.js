import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './Main';
import Forecast from './Forecast';
import ForecastCardDay from './ForecastCardDay';
class App extends React.Component {

  render() {
    return (
        <Router>
         <div className='router'>
           <Route exact path="/" component={Main}/>
           <Route path="/forecast" component={Forecast}/>
           <Route path="/details" component={ForecastCardDay}/>
         </div>
       </Router>
    );
  }
}

module.exports = App;
