import React, { Component } from "react";

class Nav extends Component {
  render() {
    return <div>
      <nav>
            <div className="nav-wrapper red lighten-1">
              <div className="row">
                <a href="#!" className="brand-logo"><i className="large material-icons">flight_land</i>Wayfarer</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="sass.html">Profile</a></li>
                  <li><a href="sass.html">Log Out</a></li>
                  <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                </ul>
              </div>
            </div>
          </nav>
    </div>;
  }
}

export default Nav;
