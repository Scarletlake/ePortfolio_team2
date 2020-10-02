import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
require('../views/templatePage.css');

const useStyles = makeStyles((theme) =>({
  root: {
      marginTop: theme.spacing(20),
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        width: theme.spacing(90),
      },
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
  grid: {
    marginTop: "20%",
    textAlign: "center",
  },
  btn_style: {
    background: "linear-gradient(45deg, #5a9cb8 30%, #2d49ba 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(63, 80, 181, .5)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginTop: "5px",
    width: "80%",
  },
}));

export default function TemplatePage() {
  const classes = useStyles();
  return (
    <div className={classes.root} >


      <Typography variant="h2">CHOOSE THE TEMPLATE YOU WANT TO USE</Typography>


      <Grid container className={classes.grid}>

        <Grid item xs={4}>
          <div className="container" >
            <img src="/envelope.png" className="image" alt="Template Page"/>
            <div className="middle" >
              <Button className={classes.btn_style} href="#">
                Under development
              </Button>
              {/* <Button className={classes.btn_style} href="#">
                View example
              </Button>
              <Button className={classes.btn_style} href="/portfolio/editor?temp=business&id=0">
                Use this template
              </Button> */}
            </div>
          </div>
          <h1>Business</h1>
        </Grid>

        <Grid item xs={4}>
          <div className="container" >
            <img src="/envelope.png" className="image" alt="Template Page"/>
            <div className="middle" >
              <Button className={classes.btn_style} href="#">
                View example
              </Button>
              <Button className={classes.btn_style} href="/portfolio/editor?temp=minimal&id=0">
                Use this template
              </Button>
            </div>
          </div>
          <h1>Minimal</h1>
        </Grid>

        <Grid item xs={4}>
          <div className="container" >
            <img src="/envelope.png" className="image" alt="Template Page"/>
            <div className="middle" >
              <Button className={classes.btn_style} href="#">
                Under development
              </Button>
              {/* <Button className={classes.btn_style} href="#">
                View example
              </Button>
              <Button className={classes.btn_style} href="/portfolio/editor?temp=art&id=0">
                Use this template
              </Button> */}
            </div>
          </div>
          <h1>Art</h1>
        </Grid>

      </Grid>
    </div>
  );
}