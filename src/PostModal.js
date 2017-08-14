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
    let title = this.state.newTitle;
    let description = this.state.newDescription;
    $.ajax({
      method: 'POST',
      url: 'https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323f8/posts',
      data: {
        title: title,
        description: description,

      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({newTitle: '', newDescription:''});
    }, err => {
      console.log(err);
    });
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
