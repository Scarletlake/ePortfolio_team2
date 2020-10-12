import React, { useState } from 'react';
import ProfileAvatar from "./ProfileAvatar"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../views/styles.css'

import { updateUserProfile } from "../../api/userAPI"
import ProfileEditor  from "./ProfileEditor"

export default function Profile(props) {

    const [first_name, setFirstName] = useState(props.firstName);
    const [last_name, setLastName] = useState(props.lastName);
    const [avatar, setAvatar] = useState(props.avatar);
    const [phone, setPhone] = useState(props.phone);
    const [gender, setGender] = useState(props.gender);

    const [first_name_value, setFirstNameValue] = useState(props.firstName);
    const [last_name_value, setLastNameValue] = useState(props.lastName);
    const [avatar_value, setAvatarValue] = useState(props.avatar);
    const [phone_value, setPhoneValue] = useState(props.phone);
    const [gender_value, setGenderValue] = useState(props.gender);

    const [showUpdateForm, setShowUpdateForm] = useState(false);

    function cancelSubmit(){
        setShowUpdateForm(!showUpdateForm);
    }

    
    function updateProfile() {
        
        updateUserProfile ({
            firstName: first_name_value,
            lastName: last_name_value, 
            avatar: avatar_value,
            gender: gender_value,
            phone: phone_value
          }).then(res => {
                if (res.status === 200) {  
                    setFirstName(first_name_value);
                    setLastName(last_name_value);
                    setAvatar(avatar_value);
                    setPhone(phone_value);
                    setGender(gender_value);                
                    
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
                <ProfileAvatar avatar={avatar} />
                <ProfileField id="firstName" name="firstName" label="First Name" value={first_name} />
                <ProfileField id="lastName" name="lastName" label="Last Name" value={last_name} />
                <ProfileField id="gender" name="gender" label="Gender" value={gender} />
                <ProfileField id="phone" name="phone" label="Phone Number" value={phone} />        
                <ProfileField id="email_read_only" name="email" label="Email" value={props.email} />            
                
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
            setFirstNameValue(val);
        }   
        else if (nam === "lastName") {
            setLastNameValue(val);
        }
        else if (nam === "phone") {
            setPhoneValue(val);
        }
      }

    return (
      <div className='ProfileForm' >
        <div className='TextCenter'>
            {showUpdateForm ?         
            (<div> 
                <ProfileEditor 
                firstName={first_name}
                lastName={last_name}
                avatar={avatar}
                phone={phone}
                email={props.email}
                gender={gender}
                setGender={setGenderValue}
                uploadPicture={setAvatarValue}
                handleChange={handleChange} 
                className='TextCenter'/>
                
                <div className=' TextCenter HortizontalAlign'>              
                    <div className='ProfileButton'>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={updateProfile}>
                            Save
                        </Button>
                    </div>

                    <div className='ProfileButton'>
                        <Button 
                            variant="contained" 
                            onClick={cancelSubmit}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>):
            (
            <div>
                <UserProfile />
            </div>
            )
               
            }                  
        </div>
      </div>
    );
}