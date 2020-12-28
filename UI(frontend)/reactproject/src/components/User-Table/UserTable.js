import { Table} from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import './UserTable.css';
import User from './User';
import UserDetails from '../UserDetail-page/UserDetails';
import ico_sorting from '../../assests/ico_sorting.svg';

class UserTable extends React.Component {
    state = {
        userList: [],
    }
    componentDidMount() {
        let UserDetail = [];
        axios.get('http://localhost:8080/getUsers').then(
            res => {
                UserDetail = res.data;
                UserDetail.sort((a, b) => { 
                    if(a.user_name < b.user_name){ return -1; }
                    else if(a.user_name > b.user_name){ return 1; }
                    else { return 0; } });
                this.setState({ userList: UserDetail });
            });       
    }
    searchData = (event) => {
        var serachValue, table, tr, td, i, txtValue;
        serachValue = event.target.value.toUpperCase();
        table = document.getElementById("userTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(serachValue) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    render() {
        return (
            <div className="userList">
                <UserDetails searchMethod={this.searchData} />
                <div style={{ overflowY: 'scroll', height: "515px" }}>
                    <Table striped borderless responsive style={{ margin:"0 20px 0 20px", fontSize: 15}} id="userTable" >
                        <thead>
                            <tr style={{position:'sticky',top:0}}>
                                <th><span style={{ marginRight: 10 }}>NAME</span><img src={ico_sorting} alt="sorting" /></th>
                                <th>EMAIL</th>
                                <th>ROLE TYPE</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              (this.state.userList).map(userDetail => (
                                    <User name={userDetail.user_name} email={userDetail.email} phone={userDetail.phone}
                                        role={userDetail.role_type} id={userDetail.user_id} status={userDetail.status}
                                       >
                                    </User>
                               ))
                            }
                        </tbody>
                    </Table>
                </div>
               
            </div>
        );
    }
}
export default UserTable;