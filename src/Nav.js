import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper red darken-4">
            <div className="row">
              <a href="#!" className="brand-logo"><i className="large material-icons">flight_land</i>Wayfarer</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Log Out</a></li>
                <li><a href="#"><i className="material-icons">search</i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
