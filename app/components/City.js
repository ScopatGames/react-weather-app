import React from 'react';
import { Link } from 'react-router';

export default class City extends React.Component {
  render(){
    return (
      <div className={this.props.classText}>
        <input
            className="form-control"
            placeholder="Denver, Colorado"
            type="text"
            onChange={this.props.onUpdateCity}/>
        <Link to={'/forecast/' + this.props.city}>
          <button className="btn btn-success" style={this.props.styleObject} type="submit">
            Get Weather
          </button>
        </Link>
        </div>
    );
  }
}
