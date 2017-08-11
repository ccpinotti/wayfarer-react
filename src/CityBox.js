import React, { Component } from "react";
import CityList from "./CityList";
import CityStuff from "./CityStuff";

class CityBox extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <CityList />
          <CityStuff />
        </div>
      </div>
    );
  }
}

export default CityBox;
