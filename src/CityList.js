import React, { Component } from "react";
import CityView from "./CityView";

class CityList extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s3 teal lighten-2">
          {/* All Cities Panel */}
          <h2>Cities</h2>
          <CityView />
          </div>
        </div>
      </div>
    );
  }
}

export default CityList;
