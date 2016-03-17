import React from 'react';
import ForecastCard from './ForecastCard';

export default class Forecast extends React.Component {
  render(){
    var fiveDayArrayListItems = this.props.fiveDayData.map(function(day, index){
      return (
        <ForecastCard key={index} day={day} handleClick={this.props.handleClick}/>
      )
    }.bind(this));
    return(
      <div className="forecast-container">
        <h1>{this.props.city}</h1>
        <ul>
          {fiveDayArrayListItems}
        </ul>
      </div>
    );
  }
}
