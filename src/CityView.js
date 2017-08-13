import React, { Component } from "react";
import styles from "./CityView";

class CityView extends Component {
  render() {
    return (
      <div className="row">
        <div className="card" id="this.props.city._id">
          <a href="#">
            <div className="card-image">
              <img src={this.props.city.cityImage} width="100%" height="auto"/>
              <span className="card-title">{this.props.city.cityName}</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default CityView;
