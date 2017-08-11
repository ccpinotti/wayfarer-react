import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <div className="row" id="city-post">
          <img
            className="left user-img"
            src="https://success.salesforce.com/resource/1499731200000/sharedlayout/img/new-user-image-default.png"
            alt="post-image"
          />
          <h6>Title</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the , when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="divider" />
      </div>
    );
  }
}

export default Post;
