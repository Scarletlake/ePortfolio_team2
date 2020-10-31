import React, { useState } from 'react';
import UploadAvatar from "../components/App/UploadAvatar"
import RadioButtom from "../components/App/RadioButtom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../views/styles.css'

import { updateUserProfile } from "../api/userAPI"
import { useUserProfile} from '../api/userAPI'
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    loading:{
        display: 'flex',
        marginTop: theme.spacing(20),

        alignItems: 'center',
        justifyContent: 'center',
    }
}));


function UpdateProfile(props){

    const {user} = props;

    const [first_name_value, setFirstNameValue] = useState(user.firstName);
    const [last_name_value, setLastNameValue] = useState(user.lastName);
    const [avatar_value, setAvatarValue] = useState(user.avatar);
    const [phone_value, setPhoneValue] = useState(user.phone);
    const [gender_value, setGenderValue] = useState(user.gender);
    
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

    function onSubmit (event) {
        event.preventDefault();
        updateUserProfile ({
            firstName: first_name_value,
            lastName: last_name_value, 
            avatar: avatar_value,
            gender: gender_value,
            phone: phone_value
          }).then(res => {
                if (res.status === 200) {
                   
                    window.location.replace("/user/home");
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
    }
    

    return (
      <div className='ProfileForm' >
        <div >  
            <div className='TextCenter'>
                <UploadAvatar avatar={avatar_value} 
                            uploadPicture={setAvatarValue} />
            </div>
            <div>
            <div className="TextCenter VerticalAlign">
                <form className='ProfileFieldRoot'>
                    <TextField  id="firstName" 
                                name="firstName"
                                label="First Name" 
                                defaultValue={first_name_value} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                    <TextField  id="lastName"
                                name="lastName"  
                                label="Last Name" 
                                defaultValue={last_name_value} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                    <RadioButtom gender={gender_value} onChange={event => {setGenderValue(event.target.value)}}/>
                    <br/>

                    <TextField  id="phone"
                                name="phone" 
                                label="Phone Number" 
                                defaultValue={phone_value} 
                                onChange={(event) => handleChange(event)}
                                
                    />
                    <br/>
                    <TextField id="email_read_only"
                                name="email" 
                                label="Email" 
                                defaultValue={user.email} 
                                InputProps={{
                                    readOnly: true,
                                }}
                    /> 
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
export default function InitProfilePage() {
    
    const classes = useStyles();

    const { loading, user, error } = useUserProfile();
    
    if (loading) {
        return (
            <div className={classes.loading}>
                <CircularProgress/>
            </div>
        )
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return <UpdateProfile user={user} />
    
}