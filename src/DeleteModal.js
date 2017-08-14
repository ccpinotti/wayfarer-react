import React, {Component} from 'react';
import { Modal } from 'react-materialize';
import $ from 'jquery-ajax';

class DeleteModal extends Component {

  constructor(props){
    super(props);
    this.state = {}
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  handlePostDelete() {
    let id = this.props.uniqueID;
    $.ajax({
      method: 'DELETE',
      url: 'https://aqueous-badlands-79359.herokuapp.com/api/cities/598dfa10547c7100076323ef/posts/' + id
    })
    .then( (res) => {
      console.log('Post deleted');
    }, (err) => {
      console.log(err);
    })
    this.forceUpdate()
  }

  render(){
    return(
      <Modal
        header='Delete this post?'
        trigger={
          <i className="small material-icons" title="Delete">delete</i>
        }>
        <p>Are you sure you want to delete "{this.props.title}"?</p>
        <a className="waves-effect waves-light btn" onClick={ this.handlePostDelete }>OK</a>
      </Modal>
    );
  }

  propTypes:{
      handleHideModal: React.PropTypes.func.isRequired,
      handleShowModal: React.PropTypes.bool.isRequired,
  }
};

export default DeleteModal;
