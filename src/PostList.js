import React, { Component } from "react";
import Post from "./Post";
import style from "./style";

class PostList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3 className="center-align" style={ style.postsHeader }>Posts <a href="#"><i className="small material-icons" title="Add a Post">add_circle</i></a></h3>
          <Post />
        </div>
      </div>
    );
  }
}

export default PostList;
