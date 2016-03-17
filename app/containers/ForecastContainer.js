import React from 'react';
import { weatherHelpers } from './../utils/weatherHelpers';
import utils from './../utils/utils';
import Forecast from './../components/Forecast';
import Loading from './../components/Loading';

class ForecastContainer extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      isLoading: true,
      fiveDayForecast: {}
    };
  }

  handleClick(data){
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        data: data
      }
    });
  }

  requestData(city){
    weatherHelpers.getFiveDayForecast(city)
    .then(function(data){
        this.setState({
          isLoading: false,
          fiveDayForecast: data
        });
    }.bind(this));
  }

  componentDidMount(){
    this.requestData(this.props.routeParams.city);
  }

  componentWillReceiveProps(newProps){
    this.requestData(newProps.routeParams.city);
  }

  render(){
    if(this.state.isLoading){
      return (
        <Loading />
      );
    } else {
      return (
        <Forecast city={this.props.routeParams.city.replace('\,', '\, ')} handleClick={this.handleClick.bind(this)} fiveDayData={this.state.fiveDayForecast.list}/>
      );
    }
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;
