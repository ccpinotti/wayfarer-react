import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col city-posts">
            <h5>Posts</h5>
            <div className="divider" />
            <Post />
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
