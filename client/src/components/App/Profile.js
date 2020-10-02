import React, { useState } from 'react';
import ProfileAvatar from "./ProfileAvatar"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../views/styles.css'

import { updateUserProfile } from "../../api/userAPI"
import ProfileEditor  from "./ProfileEditor"

export default function Profile(props) {

    const { firstName, lastName, email, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(firstName);
    const [last_name_value, setLastName] = useState(lastName);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    function cancelSubmit(){
        setFirstName(firstName);
        setLastName(lastName);
        setPhone(phone);
        setGender(gender);
        setShowUpdateForm(!showUpdateForm);
    }

    
    function updateProfile() {
        
        updateUserProfile ({
            firstName: first_name_value,
            lastName: last_name_value, 
            gender: gender_value,
            phone: phone_value
          }).then(res => {
                if (res.status === 200) {
                    
                    alert("Updated");
                }else if(res.status === 401) {
                    
                    alert ("Log in first to update your profile");
                    window.location.replace("/user/signin");
                }
                else {
                const error = new Error(res.error);
                throw error;
                }
            })
            .catch(error => {
                
                alert ("Can't save changes ");
            });

        setShowUpdateForm(!showUpdateForm);                      
    }

    const ProfileField = (props) =>{
        if (props.value){
            return(
                <div>
                    <TextField id={props.id}
                                name={props.name}
                                label={props.label}
                                defaultValue={props.value}
                                InputProps={{
                                    readOnly: true,
                                }}
                    /> 
                    <br/>
                </div>
            )
        }
        return null ;
    }

    

    function UserProfile() {    
        return (
            <div>
                <ProfileField id="firstName" name="firstName" label="First Name" value={first_name_value} />
                <ProfileField id="lastName" name="lastName" label="Last Name" value={last_name_value} />
                <ProfileField id="gender" name="gender" label="Gender" value={gender_value} />
                <ProfileField id="phone" name="phone" label="Phone Number" value={phone_value} />        
                <ProfileField id="email_read_only" name="email" label="Email" value={email} />            
                
                <div className='ProfileButton'>
                    <Button variant="contained" onClick={()=>setShowUpdateForm(!showUpdateForm)}>
                        Edit my profile
                    </Button>
                </div>
            </div>
        );
    }

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

    return (
      <div className='ProfileForm' >
        <div >  
            <div className='TextCenter'>
                <ProfileAvatar 
                    first_name={first_name_value} 
                    last_name={last_name_value}
                /> 
            </div>
            {showUpdateForm ?         
            <ProfileEditor 
                firstName={first_name_value}
                lastName={last_name_value}
                phone={phone_value}
                email={email}
                gender={gender_value}
                setGender={setGender}
                handleChange={handleChange} 
                handleSubmit={updateProfile} 
                cancelSubmit={cancelSubmit}
                className='TextCenter'/> :
                <UserProfile />}                  
        </div>
      </div>
    );
}