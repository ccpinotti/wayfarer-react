import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return(
    <div>
        {/* Current City Selection panel */}
        <div className="container">
          <div className="col s4">
            <h5>San Francisco</h5>
            <h6>United States</h6>
          </div>
          <div className="col s8">
            <img className="responsive-image right " src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/san-francisco-deluxe-half-day-city-tour-in-san-francisco-117240.jpg" alt="cityHero"/>
          </div>
        </div>
    </div>
    )
  }
}

export default CityInfo;
