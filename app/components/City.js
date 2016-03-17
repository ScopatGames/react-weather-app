import React from 'react';

export default class City extends React.Component {
  render(){
    return (
      <div className={this.props.classText}>
        <input
            className="form-control"
            placeholder="Denver, Colorado"
            value={this.props.city}
            type="text"
            onChange={this.props.onUpdateCity}/>
        <button type="button" onClick={this.props.onSubmitCity} className="btn btn-success" style={this.props.styleObject} type="submit">
          Get Weather
        </button>
      </div>
    );
  }
}
