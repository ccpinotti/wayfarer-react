import React, { Component } from "react";
import EditModal from "./EditModal";
import style from "./style";

class Post extends Component {

  constructor(props){
    super(props);
    this.state={
      view: { showModal: false }
    }
    this.handleHideModal=this.handleHideModal.bind(this);
    this.handleShowModal=this.handleShowModal.bind(this);
  }

  handleHideModal(){
      this.setState({view: {showModal: false}})
  }
  handleShowModal(){
      this.setState({view: {showModal: true}})
  }

  render() {
    return (
      <div className="card">
        <div className="card-stacked">
          <div className="card-content">
            <h4 style={ style.postTitle }>Why buy tickets to Outside Lands when I can hear it from my Inner Sunset apartment window?</h4>
            <p style={ style.postText }>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="card-action">
            <a href="#">
              <div className="chip">
                <img src="https://avatars1.githubusercontent.com/u/27825269?v=4&s=460" alt="Contact Person" />
                dalazaro
              </div>
            </a>
            <a href="#"><i className="small material-icons" title="Edit">edit</i></a>
            <a href="#"><i className="small material-icons" title="Delete">delete</i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
