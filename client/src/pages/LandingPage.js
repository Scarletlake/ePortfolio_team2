import React from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';
import CssBaseLine from '@material-ui/core/CssBaseline';
import '../styles.css'

import isAuthenticated from "../utils/checkAuthToken";

export default function LandingPage() {


  if (isAuthenticated("Authorization") ){
    return <Redirect to="/user/home" /> 
  }

  return (
   
    <div className='PageContainer'>
      <Container component="main" maxwidth="xs">

        <CssBaseLine />
        <div className='LandingBlock'>

          <div className='Landing'>

            <Typography component="h1" variant="h3" color="primary">
              ePortfolio
            </Typography>

            <br />

            <div className='SignTextBox'>

              <div className='SignSubmit'>
                <Button color="primary" variant="outlined" href="#">
                  See Examples
                </Button>
              </div>

              <div className='SignSubmit'>
                <Button color="primary" variant="contained" href="/user/signin">
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  )
}