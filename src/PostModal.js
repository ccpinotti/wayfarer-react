import React from 'react';
import { Modal, Row, Input, Icon, Button } from 'react-materialize';
import $ from 'jquery-ajax';

class PostModal extends React.Component{

  constructor(props) {
    super(props);
    this.state={newTitle: '', newDescription:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    // call handleNewPost up here
    let data = {
      title: this.state.newTitle,
      description: this.state.newDescription
    }
    this.props.handleNewPost(data);
    //this.setState({newTitle: '', newDescription:''});

  }
  handleTitleChange(e){
    this.setState({newTitle: e.target.value});
  }
  handleDescriptionChange(e){
    this.setState({newDescription: e.target.value});
  }

render(){
    return(
        <Modal
          header='New Post'
          trigger={
            <a><i className="small material-icons" title="Add a Post">add_circle</i></a>
          }>
          <Row>
		        <Input s={6} label="Title" onChange={this.handleTitleChange} value={this.state.newTitle} validate><Icon>title</Icon></Input>
          </Row>
          <Row>
            <Input s={6} label="Description" onChange={this.handleDescriptionChange} value={this.state.newDescription} validate><Icon>note</Icon></Input>
          </Row>
          <Button onClick={this.handleSubmit} >Submit</Button>
        </Modal>
    );
}
propTypes:{
    handleHideModal: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
}
};

export default PostModal;
