import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-image">
          <img src={this.props.city.cityImage} className="responsive-img" alt='city' />
          <span className="card-title">
            {this.props.city.cityName}<br />
            {this.props.city.cityCountry}
          </span>
        </div>
      </div>
    )
  }
}

export default CityInfo;
