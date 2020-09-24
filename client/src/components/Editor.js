import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { Stepper, Step, StepLabel, Button, Typography, TextField } from '@material-ui/core';

import { useUserProfile } from '../api/userAPI'
import UploadAvatar from './UploadAvatar';
import UploadPicture from './UploadPicture';


const useStyles = makeStyles((theme) => ({
    head: {
        textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Setting "Home"', 'Setting "About"', 'Setting "Leisure"', 'Setting "Contact"'];
}

export default function PortfolioEditorPage(props) {

    const classes = useStyles();

    const { firstName, lastName, email, phone, gender } = props;

    const [first_name_value, setFirstName] = useState(firstName);
    const [last_name_value, setLastName] = useState(lastName);
    const [email_value, setEmail] = useState(email);
    const [phone_value, setPhone] = useState(phone);
    const [gender_value, setGender] = useState(gender);

    const [activeStep, setActiveStep] = useState(0);

    const steps = getSteps();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
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
                );
            case 1:
                return (
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
                );
            case 2:
                return (
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
                );
            case 3:
                return (
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
                );
            default:
                return 'Unknown step';
        }
    }

    function handleChange(event) {
        // event.preventDefault();
        // let nam = event.target.name;
        // let val = event.target.value;

        // if (nam === "email") {
        //   if (!validateEmail(val)) {
        //     setEmailMsg("Please input a valid email");
        //   } else {
        //     setEmailMsg("");
        //   }
        //   setEmail(val);
        // }
        // else if (nam === "password") {
        //   if (password_input.length < 6 || password_input.length > 16) {
        //     setPasswordMsg("Password length should be between 6 to 16 characters");
        //   } else {
        //     setPasswordMsg("");
        //   }
        //   setPassword(val);
        // }
    }

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container component="main" maxwidth="xs">
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                <div>
                    {getStepContent(activeStep)}
                    <div>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
              </Button>

                        {activeStep === steps.length - 1 ?
                            (<Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Submit
                            </Button>) :
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                Next
                            </Button>
                        }

                    </div>
                </div>
            </div>
        </Container>
    );
}
