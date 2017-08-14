import React, {Component} from 'react';
import { Modal } from 'react-materialize';

class EditModal extends Component {
  render(){
      return(
          <Modal
            header='Modal Header'
            trigger={
              <i className="small material-icons" title="Edit">edit</i>
            }>
            <p>Lorem ipsum dolor sit amet</p>
          </Modal>
      );
  }
  propTypes:{
      handleHideModal: React.PropTypes.func.isRequired,
      handleShowModal: React.PropTypes.bool.isRequired,
  }
};

export default EditModal;
