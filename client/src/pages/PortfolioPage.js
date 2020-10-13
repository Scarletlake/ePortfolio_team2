import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import { usePortfolio } from "../api/portfolioAPI"
import {makeStyles} from "@material-ui/core/styles";
import '../views/styles.css'
import '../views/minimalTemplate.css'
import CircularProgress from "@material-ui/core/CircularProgress";


import ArtPortfolio from "../components/Portfolio/ArtPortfolio"
import MinimalPortfolio from "../components/Portfolio/MinimalPortfolio"
import BusinessPortfolio from "../components/Portfolio/BusinessPortfolio"

const useStyles = makeStyles((theme) => ({
  loading: {
    display: 'flex',
    marginTop: theme.spacing(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function PortfolioPage() {
  const classes = useStyles();
  
  const { id } = useParams();
  const { loading, res, error } = usePortfolio(id);

  if (loading) {
    return (
        <div className={classes.loading}>
          <CircularProgress/>
        </div>
    )
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  
  if (res.portfolio.template === "art"){
    return <ArtPortfolio portfolio={res.portfolio}/>
  }
  else if (res.portfolio.template === "art"){
    return <MinimalPortfolio portfolio={res.portfolio}/>
  }
  else if (res.portfolio.template === "art"){
    return <BusinessPortfolio portfolio={res.portfolio}/>
  }
  else {
    return <ArtPortfolio portfolio={res.portfolio}/>
  }
}
