import React from 'react';
import { weatherHelpers } from './../utils/weatherHelpers';
import utils from './../utils/utils';
import { Link } from 'react-router';


export default class ForecastContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      currentWeather: {},
      fiveDayForecast: {}
    }
    const contextTypes = {
      router: React.PropTypes.object.isRequired
    };
  }

  componentDidMount(){
    weatherHelpers.getFiveDayForecast(this.props.routeParams.city)
    .then(function(data){

        this.setState({
          isLoading: false,
          fiveDayForecast: data
        });
        console.log("MOUNTED CONTAINER STATE", this.state);
    }.bind(this));
  }

  render(){
    if(this.state.isLoading){
      return (
        <h1>Loading...</h1>
      );
    } else {
      var fiveDayArray = this.state.fiveDayForecast.list;
      var fiveDayArrayListItems = fiveDayArray.map(function(day, index){
        return (
          <li key={index}>
            <img src={"http://openweathermap.org/img/w/"+day.weather[0].icon +".png"} />
            <h2>{utils.getDate(day.dt)}</h2>
          </li>
        )
      })
      return (
        <div className="forecast-container">
          <h1>{this.props.routeParams.city.replace(',', ', ')}</h1>
          <ul>
            {fiveDayArrayListItems}
          </ul>
        </div>
      );
    }
  }
}
