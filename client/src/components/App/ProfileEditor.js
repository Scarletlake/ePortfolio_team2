import React from 'react';
import RadioButtom from "./RadioButtom"
import TextField from '@material-ui/core/TextField';
import '../../views/styles.css'
import UploadAvatar from '../App/UploadAvatar'

export default function ProfileEditor(props) {
    // the form allow users to update their information

    return (
        <div>
            <div className="TextCenter VerticalAlign">
                <form className='ProfileFieldRoot'>
                    <UploadAvatar avatar={props.avatar} 
                            first_name={props.firstName} 
                            last_name={props.lastName}
                            uploadPicture={props.uploadPicture} />
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
        </div>
    )
        
        
}