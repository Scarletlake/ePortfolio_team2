import React, { useState } from 'react';

import userSignIn from "../api/userAPI";
import validateEmail from "../utils/validateEmail";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  form: {
    width: '50%',
    marginTop: theme.spacing(1),
    border: 'solid',

  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop: theme.spacing(1),
  },

  center_button: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },

  block: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  linkstyle: {
    margin: 'auto',
  },

  inneralign: {
    width: '90%',
    alignItems: 'center',
    margin: 'auto'
  },

  
}));



export default function SignInPage() {

  const classes = useStyles();
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
      if (password_input.length < 6 || password_input.length > 16 ){
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

    <Container component="main" maxwidth="xs">

      <CssBaseLine />
      <div className={classes.block}>

        <Typography component="h1" variant="h3" >
          ePortfolio
        </Typography>
        <br />
        <Typography component="h3" variant="h4" >
          Sign in to ePortfolio
        </Typography>
        <form className={classes.form}>
          <br />
          <div className={classes.inneralign}>
            <Typography component="h2" variant="h6" >
              {message}
            </Typography>
          </div>
          <br />
          <div className={classes.inneralign}>
            <Typography component="h2" variant="h6" >
              Email:
            </Typography>
            <TextField
              required
              fullWidth
              margin = 'normal'
              variant = 'outlined'
              id="email"
              label="Email Address"
              name="email"
              helperText={email_message}
              onChange={event => handleChange(event)}
            />

            <Typography component="h2" variant="h6" >
              Password:
            </Typography>
            <TextField
              required
              fullWidth
              margin = 'normal'
              variant = 'outlined'
              id="password"
              name="password"
              label="password"
              helperText={password_message}
              onChange={event => handleChange(event)}
              autoFocus />

            <br />
            <br />

            <div className={classes.center_button}>
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
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

            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
            >
              <Grid item xs={5} >
                <Link href="/user/signup" variant='body1'>
                Click here to create an account
              </Link>
            </Grid>
           </Grid>

           <br />
          <br />




          </div>
        </form>
      </div>
      <br />
    </Container>



  );
};
