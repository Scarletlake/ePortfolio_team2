import React, { useState } from 'react';
import {userSignUp} from "../api/userAPI";
import validateEmail from "../utils/validateEmail";


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';

import '../views/styles.css'

export default function SignUpPage() {
  
  const [email_input, setEmail] = useState("");
  const [password_input, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [email_message, setEmailMsg] = useState("");
  const [password_message, setPasswordMsg] = useState("");
  const [confirm_password_messsage, setConfirmPasswordMsg] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    return validateEmail(email_input) && 
    password_input.length >= 6 &&  
    password_input.length <= 16 &&
    password_input === confirmPassword
  }

  function handleChange (event) {
    event.preventDefault(); 
    let nam = event.target.name;
    let val = event.target.value;

    if (nam === "email") {
      if (!validateEmail(val)){
        setEmailMsg("Please input a valid email");       
      }else{
        setEmailMsg("");
      }
      setEmail(val);
    }    
    else if (nam === "password") {
      if (val.length < 6 || val.length > 16 ){
        setPasswordMsg("Password length should be between 6 to 16 characters");
      }else{
        setPasswordMsg("");
      }
      setPassword(val);
    }else if(nam === "re_password"){
      if(password_input !== val){
        setConfirmPasswordMsg("Password does not match");
      } else{
        setConfirmPasswordMsg("");
      }
      setConfirmPassword(val);
    }
  }

  function onSubmit (event) {
    event.preventDefault();



    userSignUp ({
      email: email_input,
      password: password_input   
    }).then(res => {
      if (res.status === 200) {
        setMessage ("Account created!");
        window.location.replace("/user/initprofile");
      }else if(res.status === 409) {
        setMessage ("This email has been registered.");
      }
      else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(error => {
      setMessage ('Error registering please try again');
    });
  }

  return (
    
    <div className='PageContainer'>
      <Container component="main" maxwidth="xs">

        <CssBaseLine />
        <div className='SignBlock'>

          <Typography component="h1" variant="h3" >
            ePortfolio
          </Typography>
          <br />
          <Typography component="h3" variant="h4" >
            Sign up
          </Typography>
          <br />
          <form className='SignForm'>
            <br />
            <div className='SignTextBox'>
              <Typography component="h2" variant="h6" >
                {message}
                Email:
              </Typography>
              <TextField className='SignInputBox'
                required
                variant = 'outlined'
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                helperText={email_message}
                onChange={event=>handleChange(event)}
              />
                <br /> <br />

              <Typography component="h2" variant="h6" >
                Password:
              </Typography>
              <TextField className='SignInputBox'
                required
                type="password"
                variant="outlined"
                id="password"
                name="password"
                label="password"
                autoComplete="password"
                helperText={password_message}
                onChange={event=>handleChange(event)}
                autoFocus />

              <br /> <br />

              <Typography component="h2" variant="h6" >
                Confirm your password:
              </Typography>
              <TextField className='SignInputBox'
                required
                fullWidth
                type="password"
                variant="outlined"
                id="re_password"
                name="re_password"
                label="confirm password"
                helperText={confirm_password_messsage}
                onChange={event=>handleChange(event)}
                autoFocus />


              <br />
              <br />

              <div className="SignSubmit">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!validateForm()}
                  onClick={onSubmit}
                >                
                  Create Account
                </Button>
              
              </div>
              <br />


              <Typography align="center">
                Already have an account?
              </Typography>

              <Link href="/user/signin" variant='body1' className='TextCenter'>
                Click here to sign in
              </Link>


            <br />
            <br />

            </div>
          </form>
        </div>
        <br />
      </Container>
    </div>

  );
};
