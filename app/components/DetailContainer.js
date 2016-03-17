import React from 'react';
import utils from './../utils/utils';

export default class DetailContainer extends React.Component {
  render(){
    console.log('DETAIL', this.props.location.state.data);
    let day = this.props.location.state.data;
    return(
      <div className="detail-container">
        <img src={"http://openweathermap.org/img/w/"+day.weather[0].icon +".png"} />
        <ul>
          <li>{utils.getDate(day.dt)}</li>
          <li>{this.props.routeParams.city.replace(',', ', ')}</li>
          <li>{day.weather[0].description}</li>
          <li>{"min temp: " + utils.convertTemp(day.temp.min).toFixed(2) + " degrees"}</li>
          <li>{"max temp: " + utils.convertTemp(day.temp.max).toFixed(2) + " degrees"}</li>
          <li>{"humidity: " + day.humidity}</li>
        </ul>
      </div>

    );
  }
}
