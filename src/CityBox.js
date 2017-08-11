import React, { Component } from "react";
import CityList from "./CityList";
import CityStuff from "./CityStuff";

class CityBox extends Component {
  render() {
    return (
      <div>
        <CityList />
        <CityStuff />
      </div>
    );
  }
}

export default CityBox;
