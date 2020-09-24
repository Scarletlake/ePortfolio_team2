import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { Stepper, Step, StepLabel, Button, Typography, TextField } from '@material-ui/core';

import { useUserProfile } from '../api/userAPI'
import UploadPicture from '../components/UploadPicture';

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

export default function PortfolioEditorPage() {

  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const { loading, user, error } = useUserProfile();
  // console.log(user);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  const { firstName, lastName, email, phone, gender } = user;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<p>0</p>);
      case 1:
        return (<p>1</p>);
      case 2:
        return (<p>2</p>);
      case 3:
        return (<p>3</p>);
      default:
        return 'Unknown step';
    }
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
