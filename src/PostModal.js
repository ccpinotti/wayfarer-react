import React from 'react';
import { Modal, Row, Input, Icon } from 'react-materialize';

class PostModal extends React.Component{

render(){
    return(
        <Modal
          header='New Post'
          trigger={
            <a><i className="small material-icons" title="Add a Post">add_circle</i></a>
          }>
          <Row>
		        <Input s={6} label="Title" validate><Icon>title</Icon></Input>
          </Row>
          <Row>
            <Input s={6} label="Description" validate><Icon>text</Icon></Input>
          </Row>
        </Modal>
    );
}
propTypes:{
    handleHideModal: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
}
};

export default PostModal;
