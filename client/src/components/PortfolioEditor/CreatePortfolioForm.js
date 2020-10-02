import React from 'react'
import { useUserProfile } from "../../api/userAPI"
import PortfolioEditor from "./PortfolioEditor"
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  loading: {
    display: 'flex',
    marginTop: theme.spacing(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
export default function CreatePortfolioform(props) {
  const classes = useStyles();
  // load the 
  const { loading, user, error } = useUserProfile();


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
