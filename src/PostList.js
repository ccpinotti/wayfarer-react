import React, { Component } from "react";
import Post from "./Post";
import style from "./style";
import PostModal from "./PostModal";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { showModal: false }
    };
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }
  handleHideModal() {
    this.setState({ view: { showModal: false } });
  }
  handleShowModal() {
    this.setState({ view: { showModal: true } });
  }

  render() {
    let postArray = this.props.posts.reverse().map(post => {
      return (
        <Post
          key={post._id}
          uniqueID={post._id}
          title={post.title}
          description={post.description}
          deletePost={this.props.deletePost}
          handleUpdatePost={this.props.handleUpdatePost}
        />
      );
    });
    return (
      <div>
        <div className="container">
          <h3 className="center-align" style={style.postsHeader}>
            Posts
            <PostModal
              handleHideModal={this.handleHideModal}
              handleNewPost={this.props.handleNewPost}
              show={this.state.view.showModal}
            />
          </h3>
          {postArray}
        </div>
      </div>
    );
  }
}

export default PostList;
