import React, { Component } from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import PostRow from "./PostRow";

class View2 extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero />
        <PostRow />
      </div>
    );
  }
}

export default View2;
