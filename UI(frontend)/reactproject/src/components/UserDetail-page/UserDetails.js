import './UserDetails.css';
import { Navbar, Form, Button } from 'react-bootstrap';
import ico_users from '../../assests/ico_users.svg';
import ico_add from '../../assests/ico_add.svg';
import UserModal from '../AddUser-page/UserModal/UserModal';
import React from 'react';

class UserDetails extends React.Component {
    state= {
        userFlag : false
    }
    addUser = () => {
        this.setState({userFlag : true});
    }
    closeAddForm = ()=>{
        this.setState({userFlag : false})
    }
    render() {
        return (
            <>
                <Navbar className="navbottom">
                    <Navbar.Brand className="mr-auto userHeading">
                        <img src={ico_users} alt="users" />
                        <span style={{ marginLeft: 10 }}>Users</span>
                    </Navbar.Brand>
                    <Form inline>
                        <input type="text" id="userName" onKeyUp={this.props.searchMethod} placeholder="Search" title="Type in a name" />
                        <Button className="add_user" onClick={this.addUser}><img src={ico_add} alt="add" /><span style={{ marginLeft: 5 }}>Add User</span></Button>
                    </Form>
                </Navbar>
                <UserModal addFlag={this.state.userFlag} addHandleClose={this.closeAddForm}></UserModal>
            </>

        );
    }

}
export default UserDetails;