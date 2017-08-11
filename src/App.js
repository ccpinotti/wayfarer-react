import React, { Component } from "react";
import CityBox from "./CityBox";
import Nav from "./Nav";
import CityStuff from "./CityStuff";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CityBox />
      </div>
    );
  }
}

export default App;
