import React, {Component} from 'react';
import { Modal } from 'react-materialize';

class EditModal extends Component {
  render(){
      return(
          <Modal
            header='Modal Header'
            trigger={
              <Button waves='light'>MODAL</Button>
            }>
            <p>Lorem ipsum dolor sit amet</p>
          </Modal>
      );
  }
  propTypes:{
      handleHideModal: React.PropTypes.func.isRequired,
      show: React.PropTypes.bool.isRequired,
  }
};

export default EditModal;
