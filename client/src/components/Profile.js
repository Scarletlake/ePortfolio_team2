import React, { useState } from 'react';
import ProfileAvatar from "../components/ProfileAvatar"
import RadioButtom from "../components/RadioButtom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { updateUserProfile } from "../api/userAPI"

const useStyles = makeStyles((theme) => ({

    profile_form_root: {
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(6),
        width: '40ch',
      },
    },
    
    buttom_root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    field_root: {
        '& > *': {
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function Profile(props) {

    const classes = useStyles();

    const { firstName, lastName, email, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(firstName);
    const [last_name_value, setLastName] = useState(lastName);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);
    const [message, setMessage] = useState("");
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
                    setMessage ("Updated!");
                    alert("Updated");
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
            <div className={classes.field_root}>
                <ProfileField id="firstName" name="firstName" label="First Name" value={first_name_value} />
                <ProfileField id="lastName" name="lastName" label="Last Name" value={last_name_value} />
                <ProfileField id="gender" name="gender" label="Gender" value={gender_value} />
                <ProfileField id="phone" name="phone" label="Phone Number" value={phone_value} />        
                <ProfileField id="email_read_only" name="email" label="Email" value={email} />            
                
                <Button variant="contained" onClick={()=>setShowUpdateForm(!showUpdateForm)}>
                    Edit my profile
                </Button>
            </div>
        );
    }

    // the form allow users to update their information
    function UpdateProfileForm() {
        return (
        <div className="UpdateProfileForm">
            <form noValidate autoComplete="off" className={classes.field_root}>
                <TextField id="firstName" 
                            name="firstName"
                            label="First Name" 
                            defaultValue={first_name_value} 
                            onChange={event => {setFirstName(event.target.value)}}
                />
                <br/>
                <TextField id="lastName"
                            name="lastName"  
                            label="Last Name" 
                            defaultValue={last_name_value} 
                            onChange={event => {setLastName(event.target.value)}}
                />
                <br/>
                <RadioButtom gender={gender_value} onChange={event => {setGender(event.target.value)}}/>
                <br/>
                <TextField id="phone"
                            name="phone" 
                            label="Phone Number" 
                            defaultValue={phone_value} 
                            onChange={event => {setPhone(event.target.value)}}
                />
                <br/>
                <TextField id="email_read_only"
                            name="email" 
                            label="Email" 
                            defaultValue={email} 
                            InputProps={{
                                readOnly: true,
                            }}
                />
                <br/>
            </form>

            <div className={classes.buttom_root} >              
                <Button variant="contained" color="primary" onClick={updateProfile}>
                    Save
                </Button>

                <Button variant="contained" onClick={cancelSubmit}>
                    Cancel
                </Button>
            </div>

        </div>
        );
    }

    return (
      <div className={classes.profile_form_root}>  
        <ProfileAvatar first_name={first_name_value} last_name={last_name_value}/> 
        {showUpdateForm ? <UpdateProfileForm/> : <UserProfile/>}                  
      </div>
    );
}