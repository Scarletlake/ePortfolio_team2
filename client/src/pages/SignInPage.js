import React, { useState } from 'react';

import userSignIn from "../api/userAPI";
import validateEmail from "../utils/validateEmail";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';

import '../views/styles.css'

export default function SignInPage() {

  const [email_input, setEmail] = useState("");
  const [password_input, setPassword] = useState("");

  const [email_message, setEmailMsg] = useState("");
  const [password_message, setPasswordMsg] = useState("");
  const [message, setMessage] = useState("");

  function validateForm() {
    return validateEmail(email_input) && password_input.length >= 6;
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
    }
  }

  function onSubmit (event) {
    event.preventDefault();

    userSignIn ({
      email: email_input,
      password: password_input   
    }).then(res => {
      if (res.status === 200) {
        setMessage ("Login successful!");
        window.location.replace("/user/home");
      }else if(res.status === 401) {
        setMessage ("Wrong password or email!");
      }
      else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(error => {
      setMessage ('Error logging please try again');
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
            Sign in
          </Typography>
          <br/>
          
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
                label="Email Address"
                name="email"
                helperText={email_message}
                onChange={event => handleChange(event)}
              />
              <br />
              <br />

              <Typography component="h2" variant="h6" >
                Password:
              </Typography>
              <TextField className='SignInputBox'
                required
                type="password"
                variant = 'outlined'
                id="password"
                name="password"
                label="password"
                helperText={password_message}
                onChange={event => handleChange(event)}
                autoFocus />

              <br />
              <br />
              <br />

              <div className='SignSubmit'>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!validateForm()}
                  onClick={onSubmit}
                >
                  Sign In
                </Button>
            </div>
            <br />



            <Typography align="center">
              New to ePortfolio?
            </Typography>

            
            <Link href="/user/signup" variant='body1' className='TextCenter'>
              Click here to create an account
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
