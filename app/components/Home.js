import React from 'react';
import City from './City';

export default class Home extends React.Component {
  render(){
    return (
      <div className="home-container">
        <h1>Enter a City and State</h1>
        <City city={this.props.city} onSubmitCity={this.props.onSubmitCity} onUpdateCity={this.props.onUpdateCity} classText="home-ui" styleObject={{marginTop: '15px'}} />
      </div>
    );
  }
}
