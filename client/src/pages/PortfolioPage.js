import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { useParams } from "react-router-dom";
import { usePortfolio } from "../api/portfolioAPI"
import PortfolioSection from '../components/Portfolio/PortfolioSection.js';

import '../views/styles.css'

export default function PortfolioPage() {

  const defaultHomePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601620748/vtdnrfjdkbrfj7vfwudd.jpg";
  const { id } = useParams();
  const { loading, res, error } = usePortfolio(id);
  const [value, setValue] = useState(0); // Tabs
  

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const { portfolio } = res;

  
  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

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


  return (
    <div className='PageContainer'>
      <div className='PortfolioForm TextCenter VerticalAlign'>
        <Typography 
          variant="h2" 
          component="h2"
          className='PortfolioFullName'>
              {portfolio.userName}
        </Typography>
        <div className='PortfolioHeader'>

          
          <Tabs
            value={value}
            onChange={handleTabsChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className='PortfolioTabs'
          >
            <Tab label={portfolio.homePage.tag} {...a11yProps(0)} />
            <Tab label={portfolio.formalPage.tag} {...a11yProps(1)} />
            <Tab label={portfolio.leisurePage.tag} {...a11yProps(2)} />
            <Tab label={portfolio.contactPage.tag} {...a11yProps(3)} />
          </Tabs>
        </div>

        <TabPanel value={value} index={0}>

        <div className='PortfolioField TextCenter VerticalAlign'>
          <img src={portfolio.homePage.profilePhoto} alt={defaultHomePhoto}/>
          <div className='PortfolioText'>{portfolio.homePage.description}</div>
        </div>

        </TabPanel>

        <TabPanel value={value} index={1}>

        <div className='PortfolioField TextCenter VerticalAlign'>
          <div className='PortfolioText'>{portfolio.homePage.title}</div>
          <PortfolioSection sections={portfolio.formalPage.sections} />
        </div>
        </TabPanel>

        <TabPanel value={value} index={2}>

        <div>
          <div className='PortfolioField TextCenter VerticalAlign'>
          <div className='PortfolioText'>{portfolio.homePage.title}</div>
          <PortfolioSection sections={portfolio.leisurePage.sections} />
          </div>
        </div>
        </TabPanel>

        <TabPanel value={value} index={3}>

        <div className='PortfolioField TextCenter HorizontalAlign'>
          <img className='PortfolioContactImg'src={portfolio.contactPage.photo} alt={defaultHomePhoto}/>
          <div className='PortfolioContactImg VerticalAlign'>
            <div className='PortfolioText'>{portfolio.contactPage.email}</div>
            <div className='PortfolioText'>{portfolio.contactPage.phone}</div>
          </div>
        </div>
        
        </TabPanel>

        
      </div>
    </div>
  )
}
