import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ZipBox from './ZipBox';
import Forecast from './Forecast';
import Details from './Details';

class App extends React.Component{
    render() {
      return (
          <Router>
              <div className='container'>
                  <Route
                    render={ props => {
                        return (
                            <div className='navbar'>
                                <h1> Clever Title </h1>
                                <ZipBox
                                    className = 'zipcodeContainer'
                                    direction = 'row'
                                    submitZipBox={(city) =>{
                                        props.history.push({
                                          pathname: '/forecast',
                                          search: '?city=' + city
                                        })
                                    }}/>
                            </div>
                        )
                    }}
                    />
                  <Route
                    exact path='/'
                    render={ props => {
                    return (
                        <div className = 'forecast-container'
                            style={{backgroundImage: 'url("app/images/pattern.svg")'}}>
                            <h1 className='header-enter-city'>Enter a City and State</h1>
                                <ZipBox
                                    className = 'zipcodeContainer'
                                    direction = 'column'
                                    submitZipBox={(city) =>{
                                        props.history.push({
                                          pathname: '/forecast',
                                          search: '?city=' + city
                                        })
                                    }}/>
                         </div>
                    )}}/>
                  <Route path='/forecast' component={Forecast} />
                  <Route path='/details' component={Details} />
             </div>
          </Router>
      )
    }
}
module.exports = App;
