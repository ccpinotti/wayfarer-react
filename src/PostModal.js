import React from 'react';
import { Modal } from 'react-materialize';

class PostModal extends React.Component{

render(){
    return(
        <Modal
          header='Modal Header'
          trigger={
            <a><i className="small material-icons" title="Add a Post">add_circle</i></a>
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

export default PostModal;
