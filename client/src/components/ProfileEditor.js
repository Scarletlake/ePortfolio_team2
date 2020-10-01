import React, { useState } from 'react';
import RadioButtom from "../components/RadioButtom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

export default function ProfileEditor(props) {

    const classes = useStyles();

    // the form allow users to update their information
 
    return (
        <div className="UpdateProfileForm">
            <form className={classes.field_root}>
                <TextField  id="firstName" 
                            name="firstName"
                            label="First Name" 
                            defaultValue={props.firstName} 
                            onChange={(event) => props.handleChange(event)}
                            
                />
                <br/>
                <TextField  id="lastName"
                            name="lastName"  
                            label="Last Name" 
                            defaultValue={props.lastName} 
                            onChange={(event) => props.handleChange(event)}
                            
                />
                <br/>
                <RadioButtom gender={props.gender} onChange={event => {props.setGender(event.target.value)}}/>
                <br/>
                <TextField  id="phone"
                            name="phone" 
                            label="Phone Number" 
                            defaultValue={props.phone} 
                            onChange={(event) => props.handleChange(event)}
                            
                />
                <br/>
                <TextField id="email_read_only"
                            name="email" 
                            label="Email" 
                            defaultValue={props.email} 
                            InputProps={{
                                readOnly: true,
                            }}
                />
                <br/>
            </form>

            <div className={classes.buttom_root} >              
                <Button variant="contained" color="primary" onClick={props.handleSubmit}>
                    Save
                </Button>

                <Button variant="contained" onClick={props.cancelSubmit}>
                    Cancel
                </Button>
            </div>
        </div>
        )
}