import React, { useState } from 'react'
import { Tabs, Tab, Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../../views/styles.css'
import '../../views/minimalTemplate.css'
import PortfolioSection from '../../components/Portfolio/MinimalPortfolioSection';

export default function ArtTemplatePortfolioPage(props) {

    const portfolio  = props.portfolio;
    const defaultHomePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602526464/h1vr5pkcq7tmuof2qzar.png";
    const defaultContactPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601543959/xiwhjc3rgetogsluhj43.jpg";
    const defaultDescPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1604106272/b7oonk3pd3czdhlvqh9d.jpg";

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

            <div className='PageContent' style={{ backgroundImage:`url(${portfolio.backgroundImage})`}}>

            {/* Home page */}
            <TabPanel value={value} index={0}>

            <div className='TextCenter VerticalAlign HomeContainer'>
                <div>
                    {portfolio.homePage.profilePhoto?
                    <img className='HomeImage' src={portfolio.homePage.profilePhoto} alt="HomePagePhoto" /> :
                    <img className='HomeImage' src={defaultHomePhoto} alt="HomePagePhoto" />
                    }
                </div>    
                <div className='PortfolioText'>{portfolio.homePage.description}</div>
            
            </div>

            </TabPanel>

            {/* Formal page */}
            <TabPanel value={value} index={1}>

            <div className='HomeContainer'>
                <div className=' TextCenter VerticalAlign'>
                    <div className='PortfolioText MPortfolioTitle'>{portfolio.formalPage.title}</div>  
                    <PortfolioSection sectionsTextBackround={portfolio.formalPage.textBackground} sections={portfolio.formalPage.sections} />
                </div>
            </div>
            </TabPanel>

            {/* Leisure page */}
            <TabPanel value={value} index={2}>
            
            <div className='HomeContainer'>
                <div className=' TextCenter VerticalAlign'>
                    <div className='PortfolioText MPortfolioTitle'>{portfolio.leisurePage.title}</div>  
                    <PortfolioSection sectionsTextBackround={portfolio.leisurePage.textBackground} sections={portfolio.leisurePage.sections} />
                </div>
            </div>
            </TabPanel>

            {/* Contact page */}
            <TabPanel value={value} index={3}>

            <div className='TextCenter HorizontalAlign HomeContainer'>
                {portfolio.contactPage.photo?
                    <img className='MContactImg' src={portfolio.contactPage.photo} alt="ContactPagePhoto"/> :           
                    <img className='MContactImg' src={defaultContactPhoto} alt="ContactPagePhoto" />
                }
            
            <div>
                <div className='ContactContainer'>
                    {portfolio.contactPage.textBackground?
                        <img className='MContactImg' src={portfolio.contactPage.textBackground} alt="textBackground"/> :           
                        <img className='MContactImg' src={defaultDescPhoto} alt="textBackground" />
                    }
              
                    <div  className='VerticalAlign'>
                        <div className='ContactTitle'>{portfolio.contactPage.title}</div>
                        
                        <div className='ContactDesc'> 
                            <br/><br/><br/>
                            Email:<br/> {portfolio.contactPage.email} <br/><br/>
                            Phone:<br/> {portfolio.contactPage.phone}
                        </div>
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

