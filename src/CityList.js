import React, { Component } from "react";
import CityView from "./CityView";
import style from "./style";

class CityList extends Component {

  render() {
    let cityArray = this.props.cities.map( (city) => {
      return (
        <CityView
          key={city._id}
          city={city}
          />
      )
    })
    return (
      <div>
        <div className="col m4 left">
          {/* All Cities Panel */}
          <h2 className="center-align" style={ style.citiesHeader }>Cities</h2>
          {cityArray}
        </div>
      </div>
    );
  }
}

export default CityList;
