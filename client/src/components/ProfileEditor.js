import React, { useState } from 'react';
import RadioButtom from "../components/RadioButtom"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles.css'


export default function ProfileEditor(props) {
    // the form allow users to update their information
 
    return (
        <div>
            <div className="TextCenter VerticalAlign">
                <form className='ProfileFieldRoot'>
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
            </div>

            <div className=' TextCenter HortizontalAlign'>              
                <div className='ProfileButton'>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={props.handleSubmit}>
                        Save
                    </Button>
                </div>

                <div className='ProfileButton'>
                    <Button 
                        variant="contained" 
                        onClick={props.cancelSubmit}>
                        Cancel
                    </Button>
                </div>

            </div>
        </div>
    )
        
        
}