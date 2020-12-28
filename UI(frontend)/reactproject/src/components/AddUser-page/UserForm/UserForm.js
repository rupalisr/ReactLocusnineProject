import React from 'react';
import { useFormik } from 'formik';
import *  as Yup from 'yup';
import './UserForm.css';
import axios from 'axios';
import { useState } from 'react';

const UserForm = (props) => {
    const [state, changeState] = useState(1);
    const[text,changeText]=useState('');
    const [response,changeResponse]=useState(false);
    const [radioValue, changeRadioValue] = useState(props.editRole ? props.editRole : 'Admin');
    const reloadFunction = () => {
        window.location.reload(false);
    }
    const { errors, handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            name: "" || props.editName,
            roleValue: '' || props.editRole,
            phone: "" || props.editPhone,

        },
        validationSchema: Yup.object({
            name: Yup
                .string().required('Name is required'),
            phone: Yup
                .string()
                .max(10, 'Must be 10 characters')
                .min(10, 'Must be 10 characters')
        }),
        onSubmit: values => {
            let user_name = values.name;
            let role_type = radioValue;
            let phone = values.phone;
            let user_id = props.id;
            switch (state) {
                case 1:
                    axios.post('http://localhost:8080/saveUsers', { user_name, role_type, phone });
                    console.log('User Added');
                    changeResponse(true);
                    changeText('User Added Succesfully');
                    reloadFunction();
                    break;
                case 2:
                    console.log(props.id);
                    axios.post('http://localhost:8080/updateUser', { user_id, user_name, role_type, phone });
                    console.log('changes Saved');
                    changeResponse(true);
                    changeText('User Updated Succesfully');
                    reloadFunction();
                    break;
                case 3:
                    axios.post('http://localhost:8080/deleteUser', { user_id, user_name, role_type, phone });
                    console.log('User Deleted');
                    changeResponse(true);
                    changeText('User Deleted Succesfully');
                    // reloadFunction();
                    break;
                default: return false;
            }
        }

    });
    return (
     <>
         <div class="popup" style={{display:(response==true)?'block':'none'}}>
                 { text}
            </div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" id="name"
                onChange={handleChange} value={values.name || ''}
            />
            <span style={{ color: 'red', fontSize: 20, fontFamily: 'bold', marginLeft: 5 }}>{errors.name}</span>
            <br />
            <div class="userRadio">
                <label class="container">
                     <input type="radio" name="roleValue" value="Admin" id="Admin" checked={radioValue === "Admin"}
                      onChange={(event) =>changeRadioValue(event.target.value)}/>
                     <span class="checkmark"></span>
                     <span style={{marginLeft:"13px"}}>Admin</span>       
                </label>
                <label class="container">
                    <input type="radio" name="roleValue" value="Customer Executive" id="customerExecutive" checked={radioValue === "Customer Executive"}
                     onChange={(event) =>changeRadioValue(event.target.value)}/>
                    <span class="checkmark"></span>
                    <span style={{marginLeft:"13px"}}>Customer Executive </span>   
                </label>
                </div>
                    <input type="text" name="phone" placeholder="Mobile Number (Optional)" value={values.phone || ''} id="phone"
                       onChange={handleChange}/>
                    <span style={{ color: 'red', fontSize: 20, fontFamily: 'bold', marginLeft: 5 }}>{errors.phone}</span>
                    <button type="submit" style={{display: props.addBtn}} id="addBtn" onClick={() => {changeState(1) }}>ADD USER</button>
                    <button type="submit" style={{display: props.editBtn }} id="editBtn"  onClick={() => changeState(2)}>SAVE</button>
                    <button type="submit" style={{display: props.editBtn }} id="deleteBtn"  onClick={() => changeState(3)}>DELETE</button>
                   
            </form>
        </>
    );
}
export default UserForm;  