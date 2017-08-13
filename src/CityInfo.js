import React, { Component } from "react";

class CityInfo extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-image">
          <img src="http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg" className="responsive-img" />
          <span className="card-title">
            San Francisco<br />
            United States of America
          </span>
        </div>
      </div>
    )
  }
}

export default CityInfo;
