import React from 'react';
import { weatherHelpers } from './../utils/weatherHelpers';
import utils from './../utils/utils';

class ForecastContainer extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      isLoading: true,
      fiveDayForecast: {}
    };
  }

  handleClick(data){
    console.log('data: ', data);
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        data: data
      }
    });
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
          <li key={index} onClick={this.handleClick.bind(this, day)}>
            <img src={"http://openweathermap.org/img/w/"+day.weather[0].icon +".png"} />
            <span>(Please pretend these icons aren't ugly, thx)</span>
            <h2>{utils.getDate(day.dt)}</h2>
          </li>
        )
      }.bind(this));
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

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;
