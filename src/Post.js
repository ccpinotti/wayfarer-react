import React, { Component } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
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
            <h4 style={ style.postTitle }>{this.props.title}</h4>
            <p style={ style.postText }>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a href="/cities/1">
              <div className="chip">
                <img src="https://4.bp.blogspot.com/-RjVJDW-Q874/V-Th_B3Kc9I/AAAAAAAAIXo/pVqDKtW2Gwga1mRiGDDErnQAzf2h4-qTQCLcB/s1600/d23e26005a967cbfba0f6738b596cfd0.png" alt="Contact Person" />
                username
              </div>
            </a>
            <a><EditModal handleHideModal={this.handleHideModal} handleShowModal={this.state.view.showModal}/></a>
            <a><DeleteModal
              handleHideModal={this.handleHideModal}
              handleShowModal={this.state.view.showModal}
              title={this.props.title}
              uniqueID={this.props.uniqueID}
            /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
