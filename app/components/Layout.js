import React from 'react';
import City from './City';

class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      city: ''
    };

  }
  handleUpdateCity(e){
    this.setState({
      city: e.target.value
    });
  }

  handleSubmitCity(e){
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
  }

  render(){
    return (
      <div className="layout-container">
        <div className="header-container">
          <h2 className="header-title">Weigh their whey there whether weather</h2>
          <City city={this.state.city} onSubmitCity={this.handleSubmitCity.bind(this)} onUpdateCity={this.handleUpdateCity.bind(this)} classText="header-ui" styleObject={{margin: '10px'}}/>
        </div>
          {React.cloneElement(this.props.children, { city: this.state.city, onSubmitCity: this.handleSubmitCity.bind(this), onUpdateCity: this.handleUpdateCity.bind(this)})}
      </div>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Layout;
