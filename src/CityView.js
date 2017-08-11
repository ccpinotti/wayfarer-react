import React, { Component } from "react";
import styles from "./CityView";


class CityView extends Component {
  render() {
    return (
      <div>
        <div className="row blue-grey lighten-3" style={styles.CityStuff}>
          <img style={styles.cityNavImg} src="" alt="city" />
          <span>{this.props.city.cityName}</span>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default CityView;
