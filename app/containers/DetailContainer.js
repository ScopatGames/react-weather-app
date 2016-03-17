import React from 'react';
import utils from './../utils/utils';
import Detail from './../components/Detail';

export default class DetailContainer extends React.Component {
  render(){
    return(
      <Detail city={this.props.routeParams.city.replace(',', ', ')} day={this.props.location.state.data}/>
    );
  }
}
