import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div class="nav-wrapper red lighten-1">
        <div class="row">
          <a href="#!" class="brand-logo">
            <i class="large material-icons">flight_land</i>Wayfarer
          </a>
          <a href="#" data-activates="mobile-demo" class="button-collapse">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Profile</a>
            </li>
            <li>
              <a href="sass.html">Log Out</a>
            </li>
            <li>
              <a href="sass.html">
                <i class="material-icons">search</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
