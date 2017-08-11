import React, { Component } from "react";
import CityView from "./CityView";

class CityList extends Component {
  render() {
    return (
      <div>
        <div className="col s4 teal lighten-2">
          {/* All Cities Panel */}
          <h2>Cities</h2>
          <CityView />
        </div>
      </div>
    );
  }
}

export default CityList;
