import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";

class CityStuff extends Component {
  render() {
    return (
      <div>
        <CityInfo />
        <PostList />
      </div>
    );
  }
}

export default CityStuff;
