import React, { Component } from "react";
import CityInfo from "./CityInfo";
import PostList from "./PostList";
import CityModel from "./models/City";

class CityStuff extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: [],
      posts: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    CityModel.city().then( (res) => {
      this.setState({
        city: res.city,
        posts: res.city.posts
      })
    })
  }

  render() {
    return (
      <div>
        <div className='col s12 m8 right'>
          <div className='row'>
            <CityInfo
              city={this.state.city} />
          </div>
          <PostList
              posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default CityStuff;
