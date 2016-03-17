import React from 'react';
import utils from './../utils/utils';

export default class ForecastCard extends React.Component {
  render(){
    return (
      <li onClick={this.props.handleClick.bind(null, this.props.day)}>
        <img src={"http://openweathermap.org/img/w/"+this.props.day.weather[0].icon +".png"} />
        <span>(Please pretend these icons aren't ugly, thx)</span>
        <h2>{utils.getDate(this.props.day.dt)}</h2>
      </li>
    );
  }
}
