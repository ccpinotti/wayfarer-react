import React, { Component } from "react";

class CityView extends Component {
  render() {
    return (
      <div className="row">
        <div className="card" id="this.props.city._id">
          <a href="/cities/1">
            <div className="card-image">
              <img src={this.props.city.cityImage} className='responsive-img' alt='city'/>
              <span className="card-title">{this.props.city.cityName}</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default CityView;
