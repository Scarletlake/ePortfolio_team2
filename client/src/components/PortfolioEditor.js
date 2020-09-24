import React, {useState, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { createPortfolio, updatePortfolio } from "../api/portfolioAPI"

const useStyles = makeStyles((theme) => ({

  profile_form_root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(6),
      width: '40ch',
    },
  },
  
  buttom_root: {
      '& > *': {
          margin: theme.spacing(2),
      },
  },
  field_root: {
      '& > *': {
          marginBottom: theme.spacing(2),
      },
  },
}));

export default function PortfolioEditor (props){
  const classes = useStyles();

  const {_id, portfolioName,template, userName, homePage, formalPage, leisurePage, contactPage} = props.portfolio;

  const [portfolio_url, setPortfolioURL] = useState("");
  const [portfolio_name_value, setPortfolioName] = useState(portfolioName);

  // user details
  const [user_name_value, setUserName] = useState(userName);
  const [email_value, setEmail] = useState(contactPage.email);
  const [phone_value, setPhone] = useState(contactPage.phone);
  const [profile_photo_value, setProfilePhoto] = useState(homePage.profilePhoto);
  const [introduction_value, setIntroduction] = useState(homePage.description);

  // page tags
  const [home_page_tag, setHomePageTag] = useState(homePage.tag);
  const [formal_page_tag, setFormalPageTag] = useState(formalPage.tag);
  const [leisure_page_tag, setLeisurePageTag] = useState(leisurePage.tag);
  const [contact_page_tag, setContactPageTag] = useState(contactPage.tag);

  // page titles
  //const [home_page_title, setHomePageTitle] = useState("Home");
  const [formal_page_title, setFormalPageTitle] = useState(formalPage.titile);
  const [leisure_page_title, setLeisurePageTitle] = useState(leisurePage.titile);
  const [contact_page_title, setContactPageTitle] = useState(contactPage.title);

  // page sections
  const [formal_page_sections, setFormalPageSections] = useState(formalPage.sections);
  const [leisure_page_sections, setLeisurePageSections] = useState(leisurePage.sections);
  

  async function publishPortfolio() {
    const portfolio = {
      portfolioID: _id,
      portfolioName: portfolio_name_value,
      template: template,
      userName: user_name_value,
      homePage: {
        tag: home_page_tag,
        profilePhoto: profile_photo_value,
        description: introduction_value
      },
      formalPage: {
        tag: formal_page_tag,
        titile: formal_page_title,
        sections: formal_page_sections
      },
      leisurePage: {
        tag: leisure_page_tag,
        titile: leisure_page_title,
        sections: leisure_page_sections
      },
      contactPage: {
        tag: contact_page_tag,
        title: contact_page_title,
        email: email_value,
        phone: phone_value
      }
    };

    try {
      // create a new portfolio
      if (_id === '0'){
        const res = await createPortfolio (portfolio);
        setPortfolioURL(res.portfolioURL);
      } 
      // update the existing portfolio
      else {
        const res = await updatePortfolio (portfolio);
        setPortfolioURL(res.portfolioURL);
      }
    } catch (error){
      console.log(error);      
      alert ("Server Error");
    };              
  }

    return (
      <div>
        <h1>Upload the picture</h1>
        <form noValidate autoComplete="off" className={classes.field_root}>
                <TextField id="portfolioName" 
                            name="portfolioName"
                            label="portfolio Name" 
                            defaultValue={portfolio_name_value} 
                            onChange={event => {setPortfolioName(event.target.value)}}
                />
                <TextField id="userName" 
                            name="userName"
                            label="Your Name" 
                            defaultValue={user_name_value} 
                            onChange={event => {setUserName(event.target.value)}}
                />
                <TextField id="email" 
                            name="email"
                            label="Email" 
                            defaultValue={email_value} 
                            onChange={event => {setEmail(event.target.value)}}
                />
                <TextField id="phone" 
                            name="phone"
                            label="Phone" 
                            defaultValue={phone_value} 
                            onChange={event => {setPhone(event.target.value)}}
                />
                <TextField id="introduction" 
                            name="introduction"
                            label="introduction" 
                            defaultValue={introduction_value} 
                            onChange={event => {setPortfolioName(event.target.value)}}
                />
        </form> 
        <Button variant="contained" color="primary" onClick={publishPortfolio}>
                    Publish
        </Button>  
        <p> {portfolio_url}</p>
      
      </div>
    )
}
