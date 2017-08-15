import React, { Component } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import ViewModal from "./ViewModal";
import style from "./style";

class Post extends Component {
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
    return (
      <div className="card">
        <div className="card-stacked">
          <div className="card-content">
            <ViewModal
              title={this.props.title}
              description={this.props.description}
              uniqueID={this.props.uniqueID}
            />
            <p style={style.postText}>
              {this.props.description}
            </p>
          </div>
          <div className="card-action">
            <a href="/cities/1">
              <div className="chip">
                <img
                  src="https://4.bp.blogspot.com/-RjVJDW-Q874/V-Th_B3Kc9I/AAAAAAAAIXo/pVqDKtW2Gwga1mRiGDDErnQAzf2h4-qTQCLcB/s1600/d23e26005a967cbfba0f6738b596cfd0.png"
                  alt="Contact Person"
                />
                username
              </div>
            </a>
            <a>
              <EditModal
                handleHideModal={this.handleHideModal}
                showModal={this.state.view.showModal}
                handleUpdatePost={this.props.handleUpdatePost}
                uniqueID={this.props.uniqueID}
                title={this.props.title}
                description={this.props.description}
              />
            </a>
            <a>
              <DeleteModal
                handleHideModal={this.handleHideModal}
                showModal={this.state.view.showModal}
                title={this.props.title}
                uniqueID={this.props.uniqueID}
                deletePost={this.props.deletePost}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
