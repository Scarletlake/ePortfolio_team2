import React, { useState } from 'react'

import { createPortfolio, updatePortfolio } from '../../../api/portfolioAPI';
import ArtPortfolioHeaderEditor from './ArtPortfolioHeaderEditor';
import UploadPicture from '../UploadPicture';
import ArtSectionsEditor from './ArtSectionsEditor';
import PortfolioEditorBar from '../PortfolioEditorBar'
import Icon from '@material-ui/core/Icon';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Tabs, Tab, Box, TextField,Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import '../../../views/artTemplate.css'


const useStyles = makeStyles((theme) => ({

  form: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
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
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: '15%',
    paddingTop: 45,
  },
  inputCenter: {
    textAlign: 'center',
  },
  username_input: {
    background: "transparent",
    '&:hover': {
      background: "#fafafa",
    }
  },
  introduction_input: {
    background: "transparent",
    '&:hover': {
      background: "#fafafa",
    }
  },
  formal_title_input: {
    background: "transparent",
    '&:hover': {
      background: "#fafafa",
    }
  },
  leisure_title_input: {
    background: "transparent",
    '&:hover': {
      background: "#fafafa",
    }
  },
  contact_title_input: {
    background: "transparent",
    '&:hover': {
      background: "#fafafa",
    }
  },
  contact_content: {
    width: 1000,
    height: 'fit-content',
    padding: theme.spacing(2),
  },
  contact_input: {
    width: 350,
    height: 'fit-content',
    
  },
  contact_photo: {
    width: 550,
    height: 'fit-content',
  },
  paper: {
    width: "80%",
    height: "100%",
    paddingTop: 65,
    backgroundColor: "#fff"
  },
  editor: {
    width: "100%",
    height: "100%",
    paddingTop: 45,
    backgroundColor: "transparent"
  },
  editor_form: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(5),
    backgroundColor: "transparent"
  },
  text_background: {
    position: "absolute",
    width: 1000,
    height: 'fit-content',
  },
  icon: {
    width: '100%',
    height: '100%',
    position: "absolute",
  },
}));



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  position="center" 
        >
          {children}
        </Box>
      )}
    </div>
    </Grid>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ArtPortfolioEditor(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { _id, portfolioName, template, userName, backgroundImage, homePage, formalPage, leisurePage, contactPage } = props.portfolio;

  const [portfolio_url, setPortfolioURL] = useState("");
  const [portfolio_name_value, setPortfolioName] = useState(portfolioName);

  // user details
  const [user_name_value, setUserName] = useState(userName);
  const [email_value, setEmail] = useState(contactPage.email);
  const [phone_value, setPhone] = useState(contactPage.phone);
  const [profile_photo_value, setProfilePhoto] = useState(homePage.profilePhoto);
  const [introduction_value, setIntroduction] = useState(homePage.description);

  // portfolio backgroung
  const [background_image, setBackground] = useState(backgroundImage);

  // page tags
  const [home_page_tag, setHomePageTag] = useState(homePage.tag);
  const [formal_page_tag, setFormalPageTag] = useState(formalPage.tag);
  const [leisure_page_tag, setLeisurePageTag] = useState(leisurePage.tag);
  const [contact_page_tag, setContactPageTag] = useState(contactPage.tag);

  // page titles
  const [formal_page_title, setFormalPageTitle] = useState(formalPage.title);
  const [leisure_page_title, setLeisurePageTitle] = useState(leisurePage.title);
  const [contact_page_title, setContactPageTitle] = useState(contactPage.title);

  // page sections
  const [formal_page_sections, setFormalPageSections] = useState(formalPage.sections);
  const [leisure_page_sections, setLeisurePageSections] = useState(leisurePage.sections);
 
  // page photos
  const [formal_page_photo, setFormalPhoto] = useState(formalPage.pagePhoto);
  const [leisure_page_photo, setLeisurePhoto] = useState(leisurePage.pagePhoto);
  const [contact_page_photo, setContactPhoto] = useState(contactPage.photo);

  // page text background
  const [formal_text_background, setFormalTextBackground] = useState(formalPage.textBackground);
  const [leisure_text_background, setLeisureTextBackground] = useState(leisurePage.textBackground);
  const [contact_text_background, setContactTextBackground] = useState(contactPage.textBackground);

  const [value, setValue] = useState(0); // Tabs

  const [open_publish, setOpenPublish] = useState(false); // Dialog
  const [open_cancel, setOpenCancel] = useState(false);
  const [open_redirect, setOpenRedirect] = useState(false);
  const [open_edit_header, setEditHeader] = useState(false);
  

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

  const handleOpenHeaderEditor = () => {
    setEditHeader(open_edit_header => !open_edit_header);
  };

  async function publishPortfolio() {
    handlePublish();
    const portfolio = {
      portfolioID: _id,
      portfolioName: portfolio_name_value,
      template: template,
      userName: user_name_value,
      backgroundImage: background_image,
      homePage: {
        tag: home_page_tag,
        profilePhoto: profile_photo_value,
        description: introduction_value
      },
      formalPage: {
        tag: formal_page_tag,
        title: formal_page_title,
        pagePhoto: formal_page_photo,
        textBackground: formal_text_background,
        sections: formal_page_sections
      },
      leisurePage: {
        tag: leisure_page_tag,
        title: leisure_page_title,
        pagePhoto: leisure_page_photo,
        textBackground: leisure_text_background,
        sections: leisure_page_sections
      },
      contactPage: {
        tag: contact_page_tag,
        title: contact_page_title,
        email: email_value,
        phone: phone_value,
        photo: contact_page_photo,
        textBackground: contact_text_background, 
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
   <div className='PageContainer'>
   <Grid>
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
      
        <Grid    
          variant="fullWidth"
          className={classes.tabs}
        >
         
          <Grid container 
                  spacing={5}
                  direction="column"
                  justify="center"
                  alignItems="center"> 
          
          

          {value === 0?
            (<Grid item> 
              <Grid item>
                <Typography>Change Background</Typography>
                  <UploadPicture uploadPicture={setBackground} pictureUrl={background_image} height={100} width={100}/>
              </Grid>
            </Grid>):null
          }

          {value === 1?
            (<Grid item> 
              <Grid item>
                <Typography>Change Background</Typography>
                  <UploadPicture uploadPicture={setBackground} pictureUrl={background_image} height={100} width={100}/>
              </Grid>
              <Grid item>
                <Typography>Change Text Background</Typography>
                <UploadPicture uploadPicture={setFormalTextBackground} pictureUrl={formal_text_background} height={100} width={100}/>
              </Grid>
              </Grid>):null
          }

          {value === 2?
            (<Grid item> 
              <Grid item>
                <Typography>Change Background</Typography>
                  <UploadPicture uploadPicture={setBackground} pictureUrl={background_image} height={100} width={100}/>
              </Grid>
              <Grid item>
                <Typography>Change Text Background</Typography>
                <UploadPicture uploadPicture={setLeisureTextBackground} pictureUrl={leisure_text_background} height={100} width={100}/>
              </Grid>
              </Grid>):null
          }
          {value === 3?
            (<Grid item> 
              <Grid item>
                <Typography>Change Background</Typography>
                  <UploadPicture uploadPicture={setBackground} pictureUrl={background_image} height={100} width={100}/>
              </Grid>
              <Grid item>
                <Typography>Change Text Background</Typography>
                <UploadPicture uploadPicture={setContactTextBackground} pictureUrl={contact_text_background} height={100} width={100}/>
              </Grid>
              </Grid>):null
          }
          

          </Grid>  
        </Grid>
       
        <Grid className={classes.editor}
              container
              direction="column"
              justify="center"
              alignItems="center">
          <Paper className={classes.paper} style={{ backgroundImage:`url(${background_image})`}}>
            <Grid container 
                  spacing={5}
                  direction="column"
                  justify="center"
                  alignItems="center">

             
               {/* Header editor */}
                <Grid item >
                
                  <Grid container
                        spacing={3}
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid item>
                          <InputBase className={classes.username_input}
                                  classes={{input: classes.inputCenter}}
                                  placeholder="Your Name" 
                                  defaultValue={user_name_value} 
                                  inputProps={{style: {fontSize: 30}}} 
                                  onChange={event=> setUserName(event.target.value)}/>
                            
                        </Grid>

                        <Grid item>
                        <Grid item className={classes.header}>
                          {open_edit_header?              
                            (
                              
                            <div className='PortfolioTabs'>
                              <ArtPortfolioHeaderEditor username={user_name_value} setUserName={setUserName}
                                          homePageTab={home_page_tag} changeHomePageTab={changeHomePageTab}
                                          formalPageTab={formal_page_tag} changeFormalPageTab={changeFormalPageTab}
                                          leisurePageTab={leisure_page_tag} changeLeisurePageTab={changeLeisurePageTab}
                                          contactPageTab={contact_page_tag} changeContactPageTab={changeContactPageTab}/>
                              <Grid item>
                                <Icon className={classes.icon} color="black" onClick={handleOpenHeaderEditor}>done</Icon> 
                              </Grid>
                           
                            </div>
                            ):
                            (
                              <div>
                              <Tabs
                                value={value}
                                onChange={handleTabsChange}
                                indicatorColor={"white"}
                                centered
                                className='PortfolioTabs'
                              >
                                <Tab label={<span className='PortfolioTabsFont'>{home_page_tag}</span>} {...a11yProps(0)} />
                                <Tab label={<span className='PortfolioTabsFont'>{formal_page_tag}</span>}{...a11yProps(1)} />
                                <Tab label={<span className='PortfolioTabsFont'>{leisure_page_tag}</span>} {...a11yProps(2)} />
                                <Tab label={<span className='PortfolioTabsFont'>{contact_page_tag}</span>} {...a11yProps(3)} />
                              </Tabs>

                              <Grid item>
                                <Icon className={classes.icon} color="black" onClick={handleOpenHeaderEditor}>edit</Icon> 
                              </Grid>
                           
                              </div>
                            )              
                          }
                          
                      </Grid>
                    </Grid>    
                  </Grid>                  
                </Grid>

            
       
        {/* Home page editor */}

        <Grid item>
          <TabPanel value={value} index={0}>        
            <form noValidate autoComplete="off" className={classes.field_root}> 
              <Grid container
                    className={classes.editor_form}
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center">

                <Grid item>
                  <UploadPicture uploadPicture={setProfilePhoto} pictureUrl={profile_photo_value} height={500} width={500}/>
                </Grid>

                <Grid item>
                  <InputBase
                    multiline
                    fullWidth
                    classes={{input: classes.inputCenter}}
                    className={classes.introduction_input} 
                    variant='outlined'
                    id="introduction"
                    name="introduction"
                    label="introduction"
                    inputProps={{style: {fontSize: 25}}}
                    defaultValue={introduction_value}
                    onChange={event => setIntroduction(event.target.value)}
                  />
                </Grid>       
              </Grid>
            </form>
          </TabPanel>
        
          {/* About page editor */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <form noValidate autoComplete="off" className={classes.field_root}>
              <Grid container
                    className={classes.editor_form}
                    spacing={5}
                    direction="column"
                    justify="center"
                    alignItems="center">
                <Grid item>
                  <InputBase className={classes.formal_title_input} 
                            classes={{input: classes.inputCenter}}
                            name="formal_page_title"
                            placeholder="About Me" 
                            defaultValue={formal_page_title} 
                            inputProps={{style: {fontSize: 25}}}  
                            onChange={event=> setFormalPageTitle(event.target.value)}
                            />
                </Grid>

                <Grid item>
                  <ArtSectionsEditor sections={formal_page_sections} 
                                    sectionBackground={formal_text_background} 
                                    onChange={setFormalPageSections} 
                                    photoHeight={250} photoWidth={500}/>
                </Grid>

              </Grid>
            </form>
          </TabPanel>

          {/* Leisure page editor */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <form noValidate autoComplete="off" className={classes.field_root}>
              <Grid container
                    className={classes.editor_form}
                    spacing={5}
                    direction="column"
                    justify="center"
                    alignItems="center">
                <Grid item>
                  
                  <InputBase className={classes.leisure_title_input} 
                                classes={{input: classes.inputCenter}}
                                name="contact_page_title"
                                placeholder="Free Time" 
                                defaultValue={leisure_page_title} 
                                inputProps={{style: {fontSize: 25}}}  
                                onChange={event => setLeisurePageTitle(event.target.value)}/>
                    </Grid>

                <Grid item>
                  <ArtSectionsEditor sections={leisure_page_sections} 
                                    sectionBackground={leisure_text_background} 
                                    onChange={setLeisurePageSections} 
                                    photoHeight={250} photoWidth={500}/>
                </Grid>

              </Grid>
            </form>
          </TabPanel>

          {/* Contact page editor */}
          <TabPanel value={value} index={3} dir={theme.direction}>
          
              <form noValidate autoComplete="off" className={classes.field_root}>
                
              <Grid container
                    className={classes.editor_form}
                    spacing={5}
                    direction="column"
                    justify="center"
                    alignItems="center">

               <div style={{ backgroundImage:`url(${contact_text_background})`}} >
                <Grid container item className={classes.contact_content} 
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="baseline">
                  

                  <Grid item className={classes.contact_photo}>
                    <UploadPicture uploadPicture={setContactPhoto} pictureUrl={contact_page_photo} height={400} width={300}/>
                  </Grid>
                  
                  <Grid container item
                      className={classes.contact_input}
                      spacing={2}
                      direction="column"
                      justify="flex-start"
                      alignItems="flex-start"
                      >

                    <Grid item>
                      <InputBase className={classes.contact_title_input} 
                                classes={{input: classes.inputCenter}}
                                name="contact_page_title"
                                placeholder="Contact Me" 
                                defaultValue={contact_page_title} 
                                inputProps={{style: {fontSize: 25}}}  
                                onChange={event=> setContactPageTitle(event.target.value)}/>
                    </Grid>

                    <Grid item>
                      <TextField fullWidth 
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="email" 
                      defaultValue={email_value}
                      inputProps={{style: {fontSize: 20}}}
                      onChange={event => setEmail(event.target.value)}
                      />
                    </Grid>

                    <Grid item>
                    <TextField fullWidth id="phone"
                      name="phone"
                      label="Phone"
                      placeholder="Phone" 
                      defaultValue={phone_value}
                      inputProps={{style: {fontSize: 20}}}
                      onChange={event => setPhone(event.target.value)}
                    />
                    </Grid>
                  </Grid>
                </Grid>
              </div>

              
              </Grid>
            </form>            
          </TabPanel>
        </Grid>
        </Grid>
        </Paper>
        </Grid>
      </div>
    </Grid>
  </div>

  );
}