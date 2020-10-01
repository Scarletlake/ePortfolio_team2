import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CreatePortfolioform from "../components/CreatePortfolioForm"
import UpdatePortfolioForm from "../components/UpdatePortfolioForm"


export default function PortfolioEditorPage(props) {

  // get the template and the id of portfolio
  const search = useLocation().search;
  const template = new URLSearchParams(search).get('temp');
  const portfolio_id = new URLSearchParams(search).get('id');

  // create a new portfolio
  // get user profile
  if (portfolio_id === '0') {
    return <CreatePortfolioform temp={template} />
  }
  // updating the existing portfolio
  // use the original data as the default value
  else {
    return <UpdatePortfolioForm portfolio_id={portfolio_id} />
  }

}
