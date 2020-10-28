import React, { useState } from 'react'
import { Tabs, Tab, Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../../views/styles.css'
import '../../views/businessTemplate.css'
import PortfolioSection from '../../components/Portfolio/BusinessPortfolioSection';

export default function TemplateBusinessPortfolioPage(props) {

    const  portfolio  = props.portfolio;
    const defaultHomePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602528379/uauqeyyjvqcofbltokwg.png";
    const defaultFormalPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602407981/plcbsaflnqthvk7rpnmb.png";
    const defaultLeisurePhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602443847/wk4tyawn3posmcw9tq65.png";
    const defaultDescPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png";
    const defaultBackgroundPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602303637/fzrv3jlliersrymeamvp.jpg";
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
        <div className='PageContainer BackgroundColor'>
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
            <div>
                {portfolio.homePage.profilePhoto?
                <img className='HomePagePhoto' src={portfolio.homePage.profilePhoto} alt="HomePagePhoto" /> :
                <img className='HomePagePhoto' src={defaultHomePhoto} alt="HomePagePhoto" />
                }
                
                <div className='PortfolioText PortfolioHomeDesc'>{portfolio.homePage.description}</div>
            </div>
            </div>

            </TabPanel>

            {/* Formal page */}
            <TabPanel value={value} index={1}>

            <div className='TextCenter VerticalAlign SectionColor'>
            <div className='PortfolioText PortfolioTitle'>{portfolio.formalPage.title}</div>  
            <PortfolioSection sections={portfolio.formalPage.sections} />
            </div>
            </TabPanel>

            {/* Leisure page */}
            <TabPanel value={value} index={2}>
            
            <div className='TextCenter VerticalAlign SectionColor'>
            <div className='PortfolioText PortfolioTitle'>{portfolio.leisurePage.title}</div>  

            <PortfolioSection sections={portfolio.leisurePage.sections} />
            </div>
            </TabPanel>

            {/* Contact page */}
            <TabPanel value={value} index={3}>

            <div className='TextCenter HorizontalAlign SectionColor'>
            {portfolio.contactPage.photo?
                <img className='PortfolioContactImg' src={portfolio.contactPage.photo} alt="ContactPagePhoto"/> :           
                <img className='PortfolioContactImg' src={defaultContactPhoto} alt="ContactPagePhoto" />
            }
            
            <div className='VerticalAlign'>
                <div className='ContactContainer'>
                <img className='PortfolioContactImg' src={defaultDescPhoto}/>
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

