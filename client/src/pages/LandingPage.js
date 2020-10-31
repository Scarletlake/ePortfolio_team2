import React from 'react'
import { Redirect } from 'react-router-dom';
import { Button, Typography, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CssBaseLine from '@material-ui/core/CssBaseline';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../views/styles.css';

import isAuthenticated from "../utils/checkAuthToken";
import UseWindowSize from '../components/App/UseWindowSize';

const useStyles = makeStyles((theme) => ({
  headerText: {
    textAlign: (size) => (size.width < 1280 ? "center" : "left"),
  },
  showcase: {
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "10vh",
  },
  team: {
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
  member: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 20,
  }
}));

export default function LandingPage() {

  const size = UseWindowSize();
  const classes = useStyles(size);

  if (isAuthenticated("Authorization")) {
    return <Redirect to="/user/home" />
  }

  return (

    <div className='PageContainer'>
      <div style={{ width: size.width * 0.7, margin: "auto", }}>

        <CssBaseLine />
        <div className='LandingBlock'>

          <div className='Landing'>

            <Grid container spacing={5}>

              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <img src="/LogoBlack.png" width="200px" style={{ marginTop: "50px" }} alt="pandalogo"></img>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={1} xl={1}></Grid>

              <Grid item xs={12} sm={12} md={12} lg={7} xl={7} className={classes.headerText}>
                <Typography component="h1" variant="h3" color="primary">
                  E-Portfolio
                </Typography>
                <br />
                <Typography component="h1" variant="h5" color="primary" >
                  Your Portfolios Start From Here
                </Typography>
                <br />
                <Button color="primary" variant="outlined" href="/user/signin">
                  Start Now
                </Button>
              </Grid>

            </Grid>

          </div>

          <div className={classes.showcase}>
            <AnchorLink href='#templatesShowcase' style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="primary">
                Explore More About Templates
                <div style={{ marginBottom: 80 }}><KeyboardArrowDownIcon /></div>
              </Typography>
            </AnchorLink>

            <Grid id="templatesShowcase" container spacing={5} >

              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ margin: "auto" }}>
                <Typography variant="h5" color="primary">
                  Business
                  {size.width < 1280 ? <div><ArrowDownwardIcon /></div> : <div><ArrowForwardIcon /></div>}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9} style={{ marginBottom: "20px" }}>
                <img alt="Business" width={size.width < 1280 ? size.width * 0.7 : size.width * 0.4} src="http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908745/dtsp8csymx6h7pjmnj9g.png"></img>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ margin: "auto" }}>
                <Typography variant="h5" color="primary">
                  Minimal
                  {size.width < 1280 ? <div><ArrowDownwardIcon /></div> : <div><ArrowForwardIcon /></div>}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9} >
                <img alt="Minimal" width={size.width < 1280 ? size.width * 0.7 : size.width * 0.4} src="http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908806/awbltb3htbnozmk64myu.png"></img>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} style={{ margin: "auto" }}>
                <Typography variant="h5" color="primary">
                  Art
                  {size.width < 1280 ? <div><ArrowDownwardIcon /></div> : <div><ArrowForwardIcon /></div>}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={9} xl={9} >
                <img alt="Art" width={size.width < 1280 ? size.width * 0.7 : size.width * 0.4} src="http://res.cloudinary.com/do0ecn2sm/image/upload/v1603908880/xlsrzf2dgpubdb6hj2nj.png"></img>
              </Grid>

            </Grid>
          </div>

          <div className={classes.team}>

            <AnchorLink href='#team' style={{ textDecoration: "none" }}>
              <Typography variant="h5" color="primary">
                Our Team
                <div style={{ marginBottom: 80 }}><KeyboardArrowDownIcon /></div>
              </Typography>
            </AnchorLink>

            <Grid id="team" container style={{ marginTop: 20 }} >

              <Grid item xs={4} className={classes.member} container>
                <Grid item xs={12}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/EMG_-_SIMI.jpg" alt="heitong" style={{ height: 150, width: 150, borderRadius: 75 }} /></Grid>
                <Grid item xs={12}><Typography variant="h6">HeiTong Chan</Typography></Grid>
              </Grid>

              <Grid item xs={4} className={classes.member} container>
                <Grid item xs={12}><img src="/ou.jpg" alt="ouyang" style={{ height: 150, width: 150, borderRadius: 75 }} /></Grid>
                <Grid item xs={12}><Typography variant="h6">Ouyang Hui</Typography></Grid>
              </Grid>

              <Grid item xs={4} className={classes.member} container>
                <Grid item xs={12}><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/EMG_-_SIMI.jpg" alt="jielin" style={{ height: 150, width: 150, borderRadius: 75 }} /></Grid>
                <Grid item xs={12}><Typography variant="h6">Jielin Zheng</Typography></Grid>
              </Grid>

              <Grid item xs={2}></Grid>

              <Grid item xs={4} className={classes.member} container>
                <Grid item xs={12}><img src="/ZhuolunWu.png" alt="zhuolun" style={{ height: 150, width: 150, borderRadius: 75 }} /></Grid>
                <Grid item xs={12}><Typography variant="h6">Zhuolun Wu</Typography></Grid>
              </Grid>

              <Grid item xs={4} className={classes.member} container>
                <Grid item xs={12}><img src="/JiashuaiYu.jpg" style={{ height: 150, width: 150, borderRadius: 75 }} /></Grid>
                <Grid item xs={12}><Typography variant="h6">Jiashuai Yu</Typography></Grid>
              </Grid>

              <Grid item xs={2}></Grid>

            </Grid>
          </div>
        </div>

      </div>

    </div >
  )
}
