import React from "react";
import Form from "./Form";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="myModal">
        <Button color="success" onClick={this.toggle}>
          UPLOAD-RESOURCE
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.modal}
        >
          <ModalBody>
            <Form />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
