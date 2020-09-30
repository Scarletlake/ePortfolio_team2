import React, { useState, useEffect } from 'react'

import { useUserProfile } from "../api/userAPI"
import PortfolioEditor from "../components/PortfolioEditor"

export default function CreatePortfolioform(props) {

  // load the 
  const { loading, user, error } = useUserProfile();


  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }


  // the default content of portfolio
  const defaultPortfolio = {
    _id: "0",
    portfolioName: "portfolio_name",
    template: props.temp,
    userName: user.firstName + " " + user.lastName,
    homePage: {
      tag: "Home",
      profilePhoto: "link to img",
      description: "Hi"
    },
    formalPage: {
      tag: "About",
      title: "About Me",
      sections: []
    },
    leisurePage: {
      tag: "Leisure",
      title: "Free Time",
      sections: []
    },
    contactPage: {
      tag: "Contact",
      title: "Contact Me",
      email: user.email,
      phone: user.phone
    }
  }

  return (
    <div>
      <PortfolioEditor portfolio={defaultPortfolio} />
    </div>
  )
}
