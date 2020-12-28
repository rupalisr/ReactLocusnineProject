import ico_edit from '../../assests/ico_edit.svg';
import {Image} from 'react-bootstrap';
import ico_active from '../../assests/ico_active.svg';
import ico_inactive from '../../assests/ico_inactive.svg';
import ico_pending from '../../assests/ico_pending.svg';
import UserModal from '../AddUser-page/UserModal/UserModal';
import React from 'react';

class User extends React.Component{
    state = {
        editFlag:false
    }
    editUser = () =>{
        this.setState({editFlag:true});
    }
    closeEditForm = () =>{
        this.setState({editFlag:false});
    }
   render(){
       return(
        <>
        <tr >
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
            <td>{this.props.role}</td>
            <td>
                {this.props.status == 'Active' ?
                    <><Image src={ico_active} /><span style={{ marginLeft: 10 }}>Active</span></>
                    : (this.props.status == 'Inactive' ?
                        <><Image src={ico_inactive} /><span style={{ marginLeft: 10 }}>Inactive</span></> :
                        <><Image src={ico_pending} /><span style={{ marginLeft: 10 }}>Pending</span></>)}
            </td>
            <td  onClick={this.editUser} style={{cursor:"pointer"}}><img src={ico_edit} alt="edit" /></td>
         
        </tr>  
           <UserModal editFlag={this.state.editFlag} editHandleClose={this.closeEditForm} editName={this.props.name}
           editEmail={this.props.email} editPhone={this.props.phone} editRole={this.props.role} id={this.props.id}
       />  
       </> 
       );
   }
}
export default User;