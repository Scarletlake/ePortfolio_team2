import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import { createPortfolio, updatePortfolio } from '../api/portfolioAPI';
import NavbarEditor from './NavbarEditor';
import UploadPicture from './UploadPicture';
import SectionsEditor from './SectionsEditor';
import PortfolioEditorBar from './PortfolioEditorBar'

import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Tabs, Toolbar, Tab, Typography, Box, Button, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  form: {
    flexGrow: 1,
    display: 'flex',
    height: '580px',
  },
  field_root: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  grow: {
    flexGrow: 1,
  },
  btn: {
    marginLeft: theme.spacing(1),
  },
  pop: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  appbar: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '15%',
  },
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  position="absolute" 
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function PortfolioEditor(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { _id, portfolioName, template, userName, homePage, formalPage, leisurePage, contactPage } = props.portfolio;

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
  const [formal_page_title, setFormalPageTitle] = useState(formalPage.title);
  const [leisure_page_title, setLeisurePageTitle] = useState(leisurePage.title);
  const [contact_page_title, setContactPageTitle] = useState(contactPage.title);

  // page sections
  const [formal_page_sections, setFormalPageSections] = useState(formalPage.sections);
  const [leisure_page_sections, setLeisurePageSections] = useState(leisurePage.sections);

  const [value, setValue] = useState(0); // Tabs

  const [open_publish, setOpenPublish] = useState(false); // Dialog
  const [open_cancel, setOpenCancel] = useState(false);
  const [open_redirect, setOpenRedirect] = useState(false);


  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    handlePublish();
    publishPortfolio();
  };

  const handlePublish = () => {
    setOpenPublish(!open_publish);
  };

  const handleCancel = () => {
    setOpenCancel(!open_cancel);
  };

  const handleRedirect = () => {
    setOpenRedirect(true);
  }


  const changeHomePageTab = (val) => { 
    if (!val){
      setHomePageTag("Home");
    }
    else {
      setHomePageTag(val);
    }
  }

  const changeFormalPageTab = (val) => { 
    if (!val){
      setFormalPageTag("About");
    }
    else {
      setFormalPageTag(val);
    }
  }

  const changeLeisurePageTab = (val) => { 
    if (!val){
      setLeisurePageTag("Leisure");
    }
    else {
      setLeisurePageTag(val);
    }
  }

  const changeContactPageTab = (val) => { 
    if (!val){
      setContactPageTag("Contact");
    }
    else {
      setContactPageTag(val);
    }
  }


  async function publishPortfolio() {
    handlePublish();
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
      if (_id === '0') {
        const res = await createPortfolio(portfolio);
        setPortfolioURL(res.portfolioURL);
        handleRedirect();
      }
      // update the existing portfolio
      else {
        const res = await updatePortfolio(portfolio);
        setPortfolioURL(res.portfolioURL);
        handleRedirect();
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    };
  }


  return (
    <Container>
      <PortfolioEditorBar setPortfolioName={setPortfolioName} 
                          onSubmit={onSubmit} 
                          handleCancel={handleCancel}
                          handlePublish={handlePublish}
                          handleRedirect={handleRedirect}
                          portfolioName={portfolio_name_value} 
                          portfolioURL={portfolio_url}
                          open_cancel={open_cancel}
                          open_publish={open_publish}
                          open_redirect={open_redirect}
                          />

      <div className={classes.form}>

        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleTabsChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label={home_page_tag} {...a11yProps(0)} />
          <Tab label={formal_page_tag} {...a11yProps(1)} />
          <Tab label={leisure_page_tag} {...a11yProps(2)} />
          <Tab label={contact_page_tag} {...a11yProps(3)} />
        </Tabs>
       
        <Grid>

          <Grid container
                direction="column"
                justify="center"
                alignItems="center"
          >
            <InputBase placeholder="Your Name" defaultValue={user_name_value} 
                inputProps={{ 'aria-label': 'description' }} 
                onChange={event=> setUserName(event.target.value)}/>

            <NavbarEditor homePageTab={home_page_tag} changeHomePageTab={changeHomePageTab}
                          formalPageTab={formal_page_tag} changeFormalPageTab={changeFormalPageTab}
                          leisurePageTab={leisure_page_tag} changeLeisurePageTab={changeLeisurePageTab}
                          contactPageTab={contact_page_tag} changeContactPageTab={changeContactPageTab}/>
          </Grid>
          <br />

        <Grid>

        {/* Home page editor */}
        <TabPanel value={value} index={0}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            
            <UploadPicture uploadPicture={setProfilePhoto} pictureUrl={profile_photo_value} />
            {profile_photo_value !== "link to img" ? <p>{profile_photo_value}</p> : <br />}
          
            <br />
            <TextField
              multiline
              fullWidth
              margin='normal'
              variant='outlined'
              id="introduction"
              name="introduction"
              label="introduction"
              defaultValue={introduction_value}
              onChange={event => setIntroduction(event.target.value)}
            />
          </form>
        </TabPanel>

        {/* About page editor */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <InputBase placeholder="About Me" defaultValue={formal_page_title} 
              inputProps={{ 'aria-label': 'description' }} onChange={event=> setFormalPageTitle(event.target.value)}
            />
            <SectionsEditor sections={formal_page_sections} onChange={setFormalPageSections} />
          </form>
        </TabPanel>

        {/* Leisure page editor */}
        <TabPanel value={value} index={2} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <InputBase placeholder="Free Time" defaultValue={leisure_page_title} 
              inputProps={{ 'aria-label': 'description' }} onChange={event=> setLeisurePageTitle(event.target.value)}
            />
            <SectionsEditor sections={leisure_page_sections} onChange={setLeisurePageSections} />
          </form>
        </TabPanel>

        {/* Contact page editor */}
        <TabPanel value={value} index={3} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <InputBase placeholder="Contact Me" defaultValue={contact_page_title} 
              inputProps={{ 'aria-label': 'description' }} onChange={event=> setContactPageTitle(event.target.value)}
            />
            <TextField id="email"
              name="email"
              label="Email"
              defaultValue={email_value}
              onChange={event => setEmail(event.target.value)}
            />
            <br />
            <TextField id="phone"
              name="phone"
              label="Phone"
              defaultValue={phone_value}
              onChange={event => setPhone(event.target.value)}
            />
          </form>
        </TabPanel>
        </Grid>

      </Grid>

      </div>
    </Container>
  );
}