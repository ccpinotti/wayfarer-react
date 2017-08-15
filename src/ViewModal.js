import React, {Component} from 'react';
import { Modal, Row, Input, Icon, Button } from 'react-materialize';
import style from './style'

class ViewModal extends Component {
  render(){
    return(
      <Modal
        header={this.props.title}
        fixedFooter
        trigger={
          <a>
            <h4 style={style.postTitle}>
              {this.props.title}
            </h4>
          </a>
        }
      >
      <Row>
        <p>{this.props.description}</p>
      </Row>
      </Modal>
    )
  }
}

export default ViewModal;
