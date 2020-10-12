import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { usePortfolio } from "../api/portfolioAPI"
import ArtTemplatePortfolio from '../pages/ArtTemplatePortfolioPage';
import MinimalTemplatePortfolio from '../pages/MinimalTemplatePortfolioPage';
import {makeStyles} from "@material-ui/core/styles";
import '../views/styles.css'
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const { portfolio } = res;
  
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

  if (portfolio.template == 'art') {

  return (
    <div>
      <ArtTemplatePortfolio portfolio = {portfolio}/>
    </div>
    
    )
  }

  if (portfolio.template == 'minimal') {
    return (
      <div>
        <MinimalTemplatePortfolio portfolio = {portfolio}/>
      </div>
    )
  }
  
}