import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { AppBar, Tabs, Tab, Typography, Box, Button, TextField } from '@material-ui/core';

import UploadAvatar from './UploadAvatar';
import UploadPicture from './UploadPicture';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function PortfolioEditorPage(props) {

    // const classes = useStyles();
    const theme = useTheme();

    const { firstName, lastName, email, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(firstName);
    const [last_name_value, setLastName] = useState(lastName);
    const [email_value, setEmail] = useState(email);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Container component="main" maxwidth="xs">
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="About" {...a11yProps(1)} />
                    <Tab label="Leisure" {...a11yProps(2)} />
                    <Tab label="Contact" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <form>
                        <UploadAvatar first_name={firstName} last_name={lastName} />
                        <br />
                        <TextField id="firstName"
                            name="firstName"
                            label="First Name"
                            defaultValue={first_name_value}
                            onChange={event => { setFirstName(event.target.value) }}
                        />
                        <br />
                        <TextField id="lastName"
                            name="lastName"
                            label="Last Name"
                            defaultValue={last_name_value}
                            onChange={event => { setLastName(event.target.value) }}
                        />
                        <br />
                        <TextField
                            multiline
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            name="description"
                            label="Description"
                            placeholder="Enter your description ..."
                        />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <form>
                        <UploadPicture
                            name=""
                        />
                        <br />
                        <TextField
                            multiline
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            name="about_1"
                            label="Description"
                            placeholder="Enter your description ..."
                        />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <form>
                        <UploadPicture
                            name=""
                        />
                        <br />
                        <TextField
                            multiline
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            name="leisure_1"
                            label="Description"
                            placeholder="Enter your description ..."
                        />
                    </form>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <form>
                        <UploadPicture
                            name=""
                        />
                        <br />
                        <Typography>Contact</Typography>
                        <br />
                        <TextField id="firstName"
                            name="firstName"
                            label="First Name"
                            defaultValue={first_name_value}
                            onChange={event => { setFirstName(event.target.value) }}
                        />
                        <br />
                        <TextField id="lastName"
                            name="lastName"
                            label="Last Name"
                            defaultValue={last_name_value}
                            onChange={event => { setLastName(event.target.value) }}
                        />
                        <br />
                        <TextField
                            multiline
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            name="contact_description"
                            label="Contact Description"
                            placeholder="Enter your contact description ..."
                        />
                    </form>
                </TabPanel>
            </SwipeableViews>
        </Container>
    );
}
