import React, { Component } from "react";
import style from "./style";

class Post extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-stacked">
          <div className="card-content">
            <h4 style={ style.postTitle }>{this.props.title}</h4>
            <p style={ style.postText }>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href="/cities/1">
              <div className="chip">
                <img src="https://avatars1.githubusercontent.com/u/27825269?v=4&s=460" alt="Contact Person" />
                dalazaro
              </div>
            </a>
            <a href="/cities/1"><i className="small material-icons" title="Edit">edit</i></a>
            <a href="/cities/1"><i className="small material-icons" title="Delete">delete</i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
