import React, { useState } from 'react';
import ProfileAvatar from "../components/App/ProfileAvatar"
import RadioButtom from "../components/App/RadioButtom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../views/styles.css'

import { updateUserProfile } from "../api/userAPI"

export default function InitProfilePage(props) {

    const { firstName, lastName, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(firstName);
    const [last_name_value, setLastName] = useState(lastName);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);
    const [message, setMessage] = useState("");
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    
    function handleChange (event) {
        event.preventDefault(); 
        let nam = event.target.name;
        let val = event.target.value;
    
        if (nam === "firstName") {
            setFirstName(val);
        }   
        else if (nam === "lastName") {
            setLastName(val);
        }
        else if (nam === "phone") {
            setPhone(val);
        }
    }

    function onSubmit (event) {
        event.preventDefault();
        updateUserProfile ({
            firstName: first_name_value,
            lastName: last_name_value, 
            gender: gender_value,
            phone: phone_value
          }).then(res => {
                if (res.status === 200) {
                    setMessage ("Updated!");
                    window.location.replace("/user/home");
                }else if(res.status === 401) {
                    setMessage ("Log in first to update your profile");
                    alert ("Log in first to update your profile");
                    window.location.replace("/user/signin");
                }
                else {
                const error = new Error(res.error);
                throw error;
                }
            })
            .catch(error => {
                setMessage ("Can't save changes ");
                alert ("Can't save changes ");
            });

        setShowUpdateForm(!showUpdateForm);                      
    }
    

    return (
      <div className='ProfileForm' >
        <div >  
            {message}
            <div className='TextCenter'>
                <ProfileAvatar 
                    first_name={first_name_value} 
                    last_name={last_name_value}
                /> 
            </div>
            <div>
            <div className="TextCenter VerticalAlign">
                <form className='ProfileFieldRoot'>
                    <TextField  id="firstName" 
                                name="firstName"
                                label="First Name" 
                                defaultValue={props.firstName} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                    <TextField  id="lastName"
                                name="lastName"  
                                label="Last Name" 
                                defaultValue={props.lastName} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                    <RadioButtom gender={props.gender} onChange={event => {setGender(event.target.value)}}/>
                    <br/>

                    <TextField  id="phone"
                                name="phone" 
                                label="Phone Number" 
                                defaultValue={props.phone} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                   
                </form>
            </div>

            <div className=' TextCenter HortizontalAlign'>              
                <div className='ProfileButton'>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={onSubmit}>
                        Next
                    </Button>
                </div>

            </div>
        </div>              
        </div>
      </div>
    );
}