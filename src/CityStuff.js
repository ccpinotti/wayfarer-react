import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";
import CityModel from "./models/City";

class CityStuff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: [],
      cityId: '',
      posts: []
    }
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    CityModel.city().then( (res) => {
      this.setState({
        city: res.city,
        cityId: res.city._id,
        posts: res.city.posts
      })
    })
  }

  deletePost(post){
    let currentPostsList = this.state.posts;
    let postIndex = currentPostsList.indexOf(post);
    currentPostsList.splice(postIndex, 1);
    this.setState({ posts: currentPostsList });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div className='col s12 m8 right'>
          <div className='row'>
            <CityInfo
              city={this.state.city}
              key={this.state.cityId} />
          </div>
          <PostList
              posts={this.state.posts}
              key={this.state.cityId}
              deletePost={this.deletePost}/>
        </div>
      </div>
    );
  }
}

export default CityStuff;
