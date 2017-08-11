import React, { Component } from "react";
import CityView from "./CityView";



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
        <div className="col s4 teal lighten-2">
          {/* All Cities Panel */}
          <h2>Cities</h2>
          {cityArray}
        </div>
      </div>
    );
  }
}

export default CityList;
