import React from 'react'

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
      profilePhoto: "",
      description: "Hi"
    },
    formalPage: {
      tag: "About",
      title: "About Me",
      sections: [{
        id: "0",
        sectionTitle: "University",
        sectionDescription: "Description",
        photo: ""
      },
      {
        id: "1",
        sectionTitle: "Working",
        sectionDescription: "Description",
        photo: ""
      }]
    },
    leisurePage: {
      tag: "Leisure",
      title: "Free Time",
      sections: [{
        id: "0",
        sectionTitle: "Arts",
        sectionDescription: "Description",
        photo: ""
      },
      {
        id: "1",
        sectionTitle: "Sports",
        sectionDescription: "Description",
        photo: ""
      }]
    },
    contactPage: {
      tag: "Contact",
      title: "Contact Me",
      email: user.email,
      phone: user.phone,
      photo: ""
    }
  }

  return (
    <div>
      <PortfolioEditor portfolio={defaultPortfolio} />
    </div>
  )
}
