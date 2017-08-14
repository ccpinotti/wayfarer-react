import React, { Component } from "react";
import Post from "./Post";
import style from "./style";

class PostList extends Component {
  render() {
    let postArray = this.props.posts.map( (post) => {
      return (
        <Post
          key={post._id}
          uniqueID={post._id}
          title={post.title}
          description={post.description}
          deletePost={this.props.deletePost}
        />
      )
    })
    return (
      <div>
        <div className="container">
          <h3 className="center-align" style={ style.postsHeader }>Posts <a href="/cities/1"><i className="small material-icons" title="Add a Post">add_circle</i></a></h3>
          { postArray }
        </div>
      </div>
    );
  }
}

export default PostList;
