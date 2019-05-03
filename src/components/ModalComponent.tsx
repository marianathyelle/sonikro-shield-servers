import * as React from 'react';
import { observer } from 'mobx-react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export interface ModalComponentProps {
  className?: string;
  toggle: () => void;
  showModal: boolean;
  modalTitle: string;
  modalBody: any;
}

@observer
export class ModalComponent extends React.Component<ModalComponentProps> {
  
  render() {
    return (
        <Modal isOpen={this.props.showModal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>
            {this.props.modalTitle}
          </ModalHeader>
          <ModalBody className="text-center">
            {this.props.modalBody}
          </ModalBody>
        </Modal>
    )
  }
}