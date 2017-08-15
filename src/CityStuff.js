import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";
import CityModel from "./models/City";
import $ from "jquery-ajax";

class CityStuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      cityId: "",
      posts: []
    };
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    CityModel.city().then(res => {
      this.setState({
        city: res.city,
        cityId: res.city._id,
        posts: res.city.posts
      });
    });
  }

  deletePost(post) {
    let currentPostsList = this.state.posts;
    let postIndex = currentPostsList.indexOf(post);
    currentPostsList.splice(postIndex, 1);
    this.setState({ posts: currentPostsList });
    this.forceUpdate();
  }

  handleNewPost(newPost) {
    console.log(newPost);

    CityModel.createPost(newPost);
  }

  handleUpdatePost(post) {
    console.log(post);
    CityModel.updatePost(post);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== prevState) {
      console.log("COMPONENT UPDATED!!!");
      this.fetchData();
    }
  }

  render() {
    return (
      <div>
        <div className="col s12 m8 right">
          <div className="row">
            <CityInfo city={this.state.city} key={this.state.cityId} />
          </div>
          <PostList
            posts={this.state.posts}
            key={this.state.cityId}
            deletePost={this.deletePost}
            handleNewPost={this.handleNewPost.bind(this)}
            handleUpdatePost={this.handleUpdatePost.bind(this)}
            posts={this.state.posts}
          />
        </div>
      </div>
    );
  }
}

export default CityStuff;
