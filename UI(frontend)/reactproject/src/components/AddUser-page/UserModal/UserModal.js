import React from 'react';
import { Modal } from 'react-bootstrap';
import UserForm from '../UserForm/UserForm';
import './UserModal.css';

class UserModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.addFlag || this.props.editFlag}
                onHide={this.props.addHandleClose || this.props.editHandleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.addFlag ? 'Add User' : (this.props.editFlag ? 'Edit User' : '')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm addBtn = {this.props.addFlag ? 'block' : 'none'}  editBtn = {this.props.editFlag ? 'block' : 'none'}
                       editName = {this.props.editName}   editEmail ={this.props.editEmail} id={this.props.id}
                       editPhone={this.props.editPhone} editRole={this.props.editRole} 
                    />
                </Modal.Body>
            </Modal>
        );
    }
}
export default UserModal;