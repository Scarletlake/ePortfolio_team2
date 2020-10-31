import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../../views/styles.css'
import '../../views/businessTemplate.css'
import PortfolioSection from '../../components/Portfolio/BusinessPortfolioSection';

export default function TemplateBusinessPortfolioPage(props) {

    const portfolio  = props.portfolio;
    const defaultHomePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602528379/uauqeyyjvqcofbltokwg.png";
    const defaultDescPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603905346/knqtpdid10lzpcriw29s.jpg";
    const defaultBackgroundPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1603901778/smshitjnldb6rxf1dyz4.jpg";
    const defaultContactPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601543959/xiwhjc3rgetogsluhj43.jpg";

    const [value, setValue] = useState(0); // Tabs

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
        <img className='PortfolioBackgroundImg' src={portfolio.backgroundImage}/>
        <div className='PortfolioForm TextCenter VerticalAlign PortfolioBackgroundWrap'>
          <div className='PortfolioForm TextCenter VerticalAlign'>
            <div className='PortfolioFullName white'> {portfolio.userName} </div>
            <div className='PortfolioHeader white'>
    
            <Tabs
                value={value}
                onChange={handleTabsChange}
                indicatorColor={"white"}
                centered
                className='PortfolioTabs'
            >
                <Tab label={<span className='BTabFont'>{portfolio.homePage.tag}</span>} {...a11yProps(0)} />
                <Tab label={<span className='BTabFont'>{portfolio.formalPage.tag}</span>}{...a11yProps(1)} />
                <Tab label={<span className='BTabFont'>{portfolio.leisurePage.tag}</span>} {...a11yProps(2)} />
                <Tab label={<span className='BTabFont'>{portfolio.contactPage.tag}</span>} {...a11yProps(3)} />
            </Tabs>
            </div>

            {/* Home page */}
            <TabPanel value={value} index={0}>

            <div className='TextCenter VerticalAlign'>
           
                {portfolio.homePage.profilePhoto?
                <img className='BusinessHomePic' src={portfolio.homePage.profilePhoto} alt="HomePagePhoto" /> :
                <img className='BusinessHomePic' src={defaultHomePhoto} alt="HomePagePhoto" />
                }
                
                <div className='PortfolioText PortfolioHomeDesc'>{portfolio.homePage.description}</div>
         
            </div>

            </TabPanel>

            {/* Formal page */}
            <TabPanel value={value} index={1}>

            <div className='TextCenter VerticalAlign'>
            <div className='BusinessPortfolioTitle white'>{portfolio.formalPage.title}</div>  
            <PortfolioSection sections={portfolio.formalPage.sections} background={portfolio.formalPage.textBackground} /> 
            </div>
            </TabPanel>

            {/* Leisure page */}
            <TabPanel value={value} index={2}>
            
            <div className='TextCenter VerticalAlign'>
            <div className='BusinessPortfolioTitle white'>{portfolio.leisurePage.title}</div>  

            <PortfolioSection sections={portfolio.leisurePage.sections} background={portfolio.leisurePage.textBackground} />
            </div>
            </TabPanel>

            {/* Contact page */}
            <TabPanel value={value} index={3}>

            <div className=' BusinessContactContainer HorizontalAlign TextCenter'>
            
                {portfolio.contactPage.photo?
                    <img className='BusinessPortfolioContactImg' src={portfolio.contactPage.photo} alt="ContactPagePhoto"/> :           
                    <img className='BusinessPortfolioContactImg' src={defaultContactPhoto} alt="ContactPagePhoto" />
                }
                
                <div className='VerticalAlign'>
                    <div className='ContactContainer'>
                    <img className='BusinessPortfolioContactImg' src={portfolio.contactPage.textBackground}/>
                    
                    <div>
                        <div className='ContactTitle white'>{portfolio.contactPage.title}</div>
                        <div className='ContactDesc white'> {portfolio.contactPage.email}<br></br>{portfolio.contactPage.phone}</div>
                    </div>
                    </div>
                </div>
              
            </div>
            
            </TabPanel>
          </div>
            
        </div>
        </div>
    )
}

