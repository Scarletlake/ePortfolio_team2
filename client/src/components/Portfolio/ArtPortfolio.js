import React, { useState } from 'react'
import { Tabs, Tab, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ArtPortfolioSection from './ArtPortfolioSection.js';
import '../../views/styles.css'
import '../../views/artTemplate.css'


export default function ArtPortfolio(props) {

  const defaultHomePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601626502/hc8a716hhqklmhpfq30j.jpg";
  const defaultFormalPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602407981/plcbsaflnqthvk7rpnmb.png";
  const defaultLeisurePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602443847/wk4tyawn3posmcw9tq65.png";
  const defaultDescPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png";
  const defaultBackgroundPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602303637/fzrv3jlliersrymeamvp.jpg";
  const defaultContactPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601543959/xiwhjc3rgetogsluhj43.jpg";
 
  const [value, setValue] = useState(0); // Tabs

  const { portfolio } = props;
  
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
      {portfolio.backgroundImage?
        <img className='PortfolioBackgroundImg' src={portfolio.backgroundImage} alt='PortfolioBackgroundImg'/>:
        <img className='PortfolioBackgroundImg' src={defaultBackgroundPhoto} alt='PortfolioBackgroundImg'/>
      }      
      <div className='PortfolioForm TextCenter VerticalAlign PortfolioBackgroundWrap'>
        <div className='PortfolioFullName'> {portfolio.userName} </div>
        <div className='PortfolioHeader'>
 
          <Tabs
            value={value}
            onChange={handleTabsChange}
            indicatorColor={"white"}
            centered
            className='PortfolioTabs'
          >
            <Tab label={<span className='PortfolioTabsFont'>{portfolio.homePage.tag}</span>} {...a11yProps(0)} />
            <Tab label={<span className='PortfolioTabsFont'>{portfolio.formalPage.tag}</span>}{...a11yProps(1)} />
            <Tab label={<span className='PortfolioTabsFont'>{portfolio.leisurePage.tag}</span>} {...a11yProps(2)} />
            <Tab label={<span className='PortfolioTabsFont'>{portfolio.contactPage.tag}</span>} {...a11yProps(3)} />
          </Tabs>
        </div>

        {/* Home page */}
        <TabPanel value={value} index={0}>

        <div className='TextCenter VerticalAlign'>
          <div>
            {portfolio.homePage.profilePhoto?
              <img className='ArtHomePagePhoto' src={portfolio.homePage.profilePhoto} alt="HomePagePhoto" /> :
              <img className='ArtHomePagePhoto' src={defaultHomePhoto} alt="HomePagePhoto" />
            }
            
            <div className='PortfolioText PortfolioHomeDesc'>{portfolio.homePage.description}</div>
          </div>
        </div>

        </TabPanel>

        {/* Formal page */}
        <TabPanel value={value} index={1}>

        <div className='TextCenter VerticalAlign'>
          <div className='PortfolioFormalPhoto white TextCenter'>
            {portfolio.formalPage.photo?
            <img className='ArtPortfolioFormalPhoto' src={portfolio.formalPage.photo} alt='FormalPagePhoto'/>:
            <img className='ArtPortfolioFormalPhoto' src={defaultFormalPhoto} alt='FormalPagePhoto'/>
            }
            <div className='PortfolioText PortfolioTitle'>{portfolio.formalPage.title}</div>  
          </div>

          <ArtPortfolioSection sectionsTextBackround={portfolio.formalPage.textBackground} sections={portfolio.formalPage.sections} />
        </div>
        </TabPanel>

        {/* Leisure page */}
        <TabPanel value={value} index={2}>
        
        <div className='TextCenter VerticalAlign'>
          <div className='PortfolioFormalPhoto TextCenter'>
            {portfolio.leisurePage.photo?
              <img className='ArtPortfolioFormalPhoto' src={portfolio.leisurePage.photo} alt='LeisurePagePhoto'/> :
              <img className='ArtPortfolioFormalPhoto' src={defaultLeisurePhoto} alt='LeisurePagePhoto'/>
            }   
            <div className='PortfolioText PortfolioTitle'>{portfolio.leisurePage.title}</div>  
          </div>
          <ArtPortfolioSection sectionsTextBackround={portfolio.leisurePage.textBackground} sections={portfolio.leisurePage.sections} />
        </div>
        </TabPanel>

        {/* Contact page */}
        <TabPanel value={value} index={3}>

        <div className='TextCenter HorizontalAlign'>
          {portfolio.contactPage.photo?
            <img className='PortfolioContactImg' src={portfolio.contactPage.photo} alt="ContactPagePhoto"/> :           
            <img className='PortfolioContactImg' src={defaultContactPhoto} alt="ContactPagePhoto" />
          }
         
          <div className='VerticalAlign'>
            <div className='ContactContainer'>
              {portfolio.contactPage.textBackground?
                <img className='PortfolioContactImg' src={portfolio.contactPage.textBackground} alt="PortfolioContactImg"/> :           
                <img className='PortfolioContactImg' src={defaultDescPhoto} alt="PortfolioContactImg"/>
              }
              
              <div>
                <div className='ContactTitle'>{portfolio.contactPage.title}</div>
                <div className='ContactDesc'> {portfolio.contactPage.email}<br></br>{portfolio.contactPage.phone}</div>
              </div>
            </div>
          </div>
        </div>
        
        </TabPanel>

        
      </div>
    </div>
  )
}
