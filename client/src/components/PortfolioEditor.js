import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import { createPortfolio, updatePortfolio } from '../api/portfolioAPI';
// import UploadAvatar from './UploadAvatar';
import UploadPicture from './UploadPicture';
import Sections from './Sections';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AppBar, Tabs, Toolbar, Tab, Typography, Box, Button, TextField } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

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

// const useStyles = makeStyles((theme) => ({

//   profile_form_root: {
//       '& > *': {
//           margin: theme.spacing(1),
//           marginLeft: theme.spacing(6),
//           width: '40ch',
//       },
//   },
//   buttom_root: {
//       '& > *': {
//           margin: theme.spacing(2),
//       },
//   },
//   field_root: {
//       '& > *': {
//           marginBottom: theme.spacing(2),
//       },
//   },
//   div_root: {
//       height: '500px',
//   },
//   btn: {
//       flexGrow: 1,
//       float: "right",
//       marginRight: theme.spacing(2),
//   },
//   pop: {
//       flexGrow: 1,
//       padding: "10px",
//   },
//   appbar: {
//       // background: "#757ce8",
//   },

// }));

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
        <Box
          position="absolute"
          left={index == 0 || index == 3 ? "44vw" : "32vw"}
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

  const uploadPicture = (picurl) => {
    setProfilePhoto(picurl);
  }



  const handlePublish = () => {
    setOpenPublish(!open_publish);
  };

  const handleCancel = () => {
    setOpenCancel(!open_cancel);
  };

  const handleRedirect = () => {
    setOpenRedirect(true);
  }



  const onFormalChange = (newValue) => {
    setFormalPageSections(newValue);
  }

  const onLeisureChange = (newValue) => {
    setLeisurePageSections(newValue);
  }

  function handleChange(event) {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;

    switch (nam) {
      case "portfolioName":
        setPortfolioName(val);
      case "userName":
        setUserName(val);
      case "introduction":
        setIntroduction(val);
      case "email":
        setEmail(val);
      case "phone":
        setPhone(val);
      default:
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
      <Appbar />
      <div className={classes.form}>

        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleTabsChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>

        {/* Home page editor */}
        <TabPanel value={value} index={0}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <UploadPicture uploadPicture={uploadPicture} pictureUrl={profile_photo_value} />
            {profile_photo_value !== "link to img" ? <p>{profile_photo_value}</p> : <br />}
            <TextField
              id="portfolioName"
              name="portfolioName"
              label="portfolio Name"
              defaultValue={portfolio_name_value}
              onChange={event => handleChange(event)}
            />
            <br />
            <TextField
              id="userName"
              name="userName"
              label="Your Name"
              defaultValue={user_name_value}
              onChange={event => handleChange(event)}
            />
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
              onChange={event => handleChange(event)}
            />
          </form>
        </TabPanel>

        {/* About page editor */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <Sections sections={formal_page_sections} onClick={onFormalChange} />
          </form>
        </TabPanel>

        {/* Leisure page editor */}
        <TabPanel value={value} index={2} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <Sections sections={leisure_page_sections} onClick={onLeisureChange} />
          </form>
        </TabPanel>

        {/* Contact page editor */}
        <TabPanel value={value} index={3} dir={theme.direction}>
          <form noValidate autoComplete="off" className={classes.field_root}>
            <TextField id="email"
              name="email"
              label="Email"
              defaultValue={email_value}
              onChange={event => handleChange(event)}
            />
            <br />
            <TextField id="phone"
              name="phone"
              label="Phone"
              defaultValue={phone_value}
              onChange={event => handleChange(event)}
            />
          </form>
        </TabPanel>

      </div>
    </Container>
  );


  function Appbar() {
    return (
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <div className={classes.grow} />

          <Button variant="outlined" color="primary" onClick={handleCancel} className={classes.btn}>
            Cancel
          </Button>

          <Button variant="contained" color="primary" onClick={handlePublish} className={classes.btn}>
            Publish
          </Button>

          <Dialog
            open={open_cancel}
          >
            <DialogTitle>{"Abort this edit?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                If you choose to abort this edit, all changes will not be saved.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleCancel} autoFocus>
                Continue editing
              </Button>
              <Button href={"./template"} color="secondary">
                <b>Abort</b>&nbsp;editing
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={open_publish}
            onClose={handlePublish}
          >
            <DialogTitle>{"Finished all edits?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                If you are finished editing, you can click the "Continue" button to finish publishing.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handlePublish} color="primary">
                Back
              </Button>
              <Button onClick={onSubmit} color="primary" autoFocus>
                Continue
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={open_redirect}
            onClose={handleRedirect}
          >
            <DialogTitle>{"Successfully pubilished!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your portfolio is now successfully published!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button href={"../user/home"} color="primary">
                Home page
              </Button>
              <Button href={portfolio_url} color="primary" autoFocus>
                Profile page
              </Button>
            </DialogActions>
          </Dialog>

        </Toolbar>
      </AppBar>
    )
  }
}