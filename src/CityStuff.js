import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";

class CityStuff extends Component {
  render() {
    return (
      <div>
        <div className='col s12 m8 right'>
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
