import React from 'react';
import City from './City';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      city: ''
    };
    
  }
  handleUpdateCity(e){
    this.setState({
      city: e.target.value.replace(/\s+/g,'')
    });
  }

  render(){
    return (
      <div className="layout-container">
        <div className="header-container">
          <h2 className="header-title">Weigh their whey there whether weather</h2>
          <City city={this.state.city} onUpdateCity={this.handleUpdateCity.bind(this)} classText="header-ui" styleObject={{margin: '10px'}}/>
        </div>
          {React.cloneElement(this.props.children, { city: this.state.city, onUpdateCity: this.handleUpdateCity.bind(this)})}
      </div>
    );
  }
};
