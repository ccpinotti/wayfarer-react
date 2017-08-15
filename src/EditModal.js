import React, { Component } from "react";
import { Modal, Row, Input, Icon, Button } from "react-materialize";

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // call handleNewPost up here
    // let data = {
    //   id: this.props.id
    //   title: this.state.newTitle,
    //   description: this.state.newDescription
    // }
    // TODO: define data
    this.props.handleUpdatePost({
      uniqueID: this.props.uniqueID,
      title: this.state.title,
      description: this.state.description
    });
    // document.getElementById('modal_3').remove();
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <Modal
        header="Edit Post"
        trigger={
          <a>
            <i className="small material-icons" title="Edit a Post">
              edit
            </i>
          </a>
        }
      >
        <Row>
          <Input
            s={6}
            label="Title"
            onChange={this.handleTitleChange}
            data-length="10"
            value={this.state.title}
            validate
          >
            <Icon>title</Icon>
          </Input>
        </Row>
        <Row>
          <textarea
            s={6}
            label="Description"
            onChange={this.handleDescriptionChange}
            class="materialize-textarea"
            data-length="120"
            value={this.state.description}
            validate
          >
            <Icon>note</Icon>
          </textarea>
        </Row>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Modal>
    );
  }

  propTypes: {
    handleHideModal: React.PropTypes.func.isRequired,
    handleShowModal: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  };
}

export default EditModal;
