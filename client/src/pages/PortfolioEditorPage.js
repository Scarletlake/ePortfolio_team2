import React from 'react'
import { useLocation } from "react-router-dom";

import CreatePortfolioform from "../components/PortfolioEditor/CreatePortfolioForm"
import UpdatePortfolioForm from "../components/PortfolioEditor/UpdatePortfolioForm"


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
