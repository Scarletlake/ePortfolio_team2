import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { setPortfolio} from "../api/portfolioAPI"

const useStyles = makeStyles((theme) => ({

  profile_form_root: {
    '& > *': {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(6),
      width: '40ch',
    },
  },
  
  buttom_root: {
      '& > *': {
          margin: theme.spacing(2),
      },
  },
  field_root: {
      '& > *': {
          marginBottom: theme.spacing(2),
      },
  },
}));

export default function PortfolioEditorPage (){
  const classes = useStyles();

  const [portfolio_name, setProfileName] = useState("");

  function publishPortfolio() {
    setPortfolio ({
      portfolioName: portfolio_name,
    }).then(res => {
      if (res.status === 200) {
        alert("Updated");
    }else if(res.status === 401) {
        alert ("Log in first to create your portfolio");
        window.location.replace("/user/signin");
    }
    else {
      const error = new Error(res.error);
      throw error;
    }
    })
      .catch(error => {
        console.log(error);      
        alert ("Can't save changes ");
    });     
             
  }

    return (
      <div>
        <h1>Upload the picture</h1>
        <form noValidate autoComplete="off" className={classes.field_root}>
                <TextField id="portfolioName" 
                            name="portfolioName"
                            label="portfolio Name" 
                            defaultValue={"Input your portfolio name"} 
                            onChange={event => {setProfileName(event.target.value)}}
                />
        </form> 
        <Button variant="contained" color="primary" onClick={publishPortfolio}>
                    Publish
        </Button>     
      </div>
    )
}
