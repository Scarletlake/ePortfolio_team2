import React, { useState, Fragment } from 'react';
import ProfileAvatar from "../components/ProfileAvatar"
import RadioButtom from "../components/RadioButtom"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Profile(props) {
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

    const classes = useStyles();

    const { first_name, last_name, email, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(first_name);
    const [last_name_value, setLastName] = useState(last_name);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);

    const [showUpdateForm, setShowUpdateForm] = useState(false);

    function cancelSubmit(){
        setFirstName(first_name);
        setLastName(last_name);
        setPhone(phone);
        setGender(gender);
        setShowUpdateForm(!showUpdateForm);
    }

    
    function updateProfile() {
        
        setShowUpdateForm(!showUpdateForm);
                          
    }

    const ProfileField = (props) =>{
        return(
            <div>
                <TextField label={props.label}
                            defaultValue={props.value}
                            InputProps={{
                                readOnly: true,
                            }}
                /> 
                <br/>
            </div>
        )
    }

    

    function UserProfile() {    

        return (
            <div className={classes.field_root}>
                {first_name_value? <ProfileField label="First Name" value={first_name_value} />:{}}
                {last_name_value? <ProfileField label="Last Name" value={last_name_value} />:{}}
                {gender_value? <ProfileField label="Gender" value={gender_value} />:{}}
                {phone_value? <ProfileField label="Phone Number" value={phone_value} />:{}}          
                <ProfileField label="Email" value={email} />            
                
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
                <TextField id="first_name_input" 
                            label="First Name" 
                            defaultValue={first_name_value} 
                            onChange={event => {setFirstName(event.target.value)}}
                />
                <br/>
                <TextField id="last_name_input" 
                            label="Last Name" 
                            defaultValue={last_name_value} 
                            onChange={event => {setLastName(event.target.value)}}
                />
                <br/>
                <RadioButtom gender={gender_value} onChange={event => {setGender(event.target.value)}}/>
                <br/>
                <TextField id="phone_input" 
                            label="Phone Number" 
                            defaultValue={phone_value} 
                            onChange={event => {setPhone(event.target.value)}}
                />
                <br/>
                <TextField id="email_read_only" 
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