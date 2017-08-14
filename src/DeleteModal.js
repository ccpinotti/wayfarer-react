import React, {Component} from 'react';
import { Modal } from 'react-materialize';

class DeleteModal extends Component {
  render(){
    return(
      <Modal
        header='Delete Post'
        trigger={
          <i className="small material-icons" title="Delete">delete</i>
        }>
        <p>Are you sure you want to delete this post?</p>
        <button type='submit'>OK</button>
      </Modal>
    );
  }
  propTypes:{
      handleHideModal: React.PropTypes.func.isRequired,
      handleShowModal: React.PropTypes.bool.isRequired,
  }
};

export default DeleteModal;
