// import React, { Fragment, Component } from 'react'
// import { Link } from 'react-router-dom';

// class LandingPage extends Component {
//   render() {
//     return (
//       <Fragment>
//       <h1 className="landing-title">
//       ePortfolio
//       </h1>

//       <img></img>

//       <Link to='/' className="btn" >See Examples</Link>
//       <br />
//       <Link to='/user/signup' className="btn" >Start Now</Link>
//     </Fragment>
//     )
//   }
// }

// export default LandingPage

import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import { Button, Typography, Container, Grid } from '@material-ui/core';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landing: {
    width: '50%',
    marginTop: theme.spacing(1),
    margin: "20px",
    textAlign: "center",
  },
  landing_btn: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    marginTop: theme.spacing(1),
    width: "30%",
  },
  block: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(35),
  },
}));

export default function LandingPage() {

  const classes = useStyles();

  return (
    
    <Container component="main" maxwidth="xs">

      <CssBaseLine />
      <div className={classes.block}>

        <div className={classes.landing}>

          <Typography component="h1" variant="h3" color="primary">
            ePortfolio
          </Typography>

          <br />

          <div className={classes.inneralign}>

            <div className={classes.landing_btn}>
              <Button className={classes.btn} color="primary" variant="outlined" href="#">
                See Examples
              </Button>
            </div>

            <div className={classes.landing_btn}>
              <Button className={classes.btn} color="primary" variant="contained" href="/user/signup">
                Start Now
              </Button>
            </div>

          </div>

        </div>

      </div>
    </Container>

    
  )
}