import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";

class CityStuff extends Component {
  render() {
    return (
      <div>
        <div className='col s8 blue-grey lighten-3'>
          <div className='row'>
            <CityInfo />
          </div>
          <PostList />
        </div>
      </div>
    );
  }
}

export default CityStuff;
