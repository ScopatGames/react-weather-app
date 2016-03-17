import React from 'react';
import utils from './../utils/utils';

export default class Detail extends React.Component {
  render(){
    return (
      <div className="detail-container">
        <ul>
          <li>
            <img src={"http://openweathermap.org/img/w/"+this.props.day.weather[0].icon +".png"} />
          </li>
          <li>{utils.getDate(this.props.day.dt)}</li>
          <li>{this.props.city}</li>
          <li>{this.props.day.weather[0].description}</li>
          <li>{"min temp: " + utils.convertTemp(this.props.day.temp.min).toFixed(2) + " degrees"}</li>
          <li>{"max temp: " + utils.convertTemp(this.props.day.temp.max).toFixed(2) + " degrees"}</li>
          <li>{"humidity: " + this.props.day.humidity}</li>
        </ul>
      </div>
    );
  }

}
