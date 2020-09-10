import React, { Fragment } from 'react';
import userLogIn from "../api/userAPI";

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
  }
}));



export default function SignIn() {

  const classes = useStyles();

  return (

    <Container component="main" maxwidth="xs">

      <CssBaseLine />
      <div className={classes.block}>

        <Typography component="h1" variant="h3" >
          ePortfolio
        </Typography>
        <br />

        <form className={classes.form}>
          <br />
          <div className={classes.inneralign}>
            <Typography component="h2" variant="h6" >
              Email:
            </Typography>
            <TextField
              required
              margin="normal"
              fullWidth
              variant="outlined"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <Typography component="h2" variant="h6" >
              Password:
            </Typography>
            <TextField
              required
              fullWidth
              margin="normal"
              variant="outlined"
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus />
          

            <br />
            <br />

            <div className={classes.center_button}>
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
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
                <Link href="#" variant='body1'>
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

