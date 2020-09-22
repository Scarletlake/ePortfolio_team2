import React, { useState }from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { deletePortfolioByID } from "../api/portfolioAPI"

const usePortfolioStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 2000,
    padding: theme.spacing(1),
  },
  paper: {
    maxWidth: 2000,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  buttom_root: {
    '& > *': {
        margin: theme.spacing(2),
    },
  },

}));

const useStyles = makeStyles((theme) => ({
    portfolio_list_root: {
        '& > *': {
            margin: theme.spacing(1),
            marginLeft: theme.spacing(6),
          },
        },
  }));



export default function PortfolioList (props) {
    const {portfolios} = props;
    const [portfolio_list, setPortfolioList] = useState(portfolios);
    
    const classes = useStyles();

    function deletePortfolio(portfolioID){
        deletePortfolioByID(portfolioID)
        .then(res => {
            if (res.status === 200) {            
            setPortfolioList(portfolio_list.filter(portfolio => portfolio.portfolioID !== portfolioID)); 
            alert("Deleted!");
        }else if(res.status === 401) {
            console.log(res);
              alert ("Log in first");
              window.location.replace("/user/signin");             
          }
          else {
            const error = new Error(res.error);
            throw error;
           
          }
          })
            .catch(error => {            
            alert ("Can't delete ");
         
        });     


        

        
    }

    function HomePortfolio(props) {   
        const classes = usePortfolioStyles();
        const { portfolioID, portfolioName, portfolioURL } = props.portfolio;
    
        return (
            <div className={classes.root}>   
            <Paper className={classes.paper}>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={3}>
                            <Typography gutterBottom variant="h6">
                                {portfolioName}
                            </Typography>
                            <br/>
                            <Link>
                                {portfolioURL}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>           
            </Paper>
            <div className={classes.buttom_root} >  
                <Button variant="contained" color="primary">
                            Edit
                </Button>
                <Button variant="contained" color="primary" onClick={()=>deletePortfolio(portfolioID)}>
                            Delete 
                </Button>
            </div>
            </div>
        ) 
    }


    function PortfolioList(props){
        return(
        <Grid container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
            {props.portfolio_list.map((portfolio) => (
            <Grid item key={portfolio}>
                <HomePortfolio portfolio={portfolio}/>
            </Grid>
            ))
            } 
            </Grid>
        )
    }


    return (
        
        <div className={classes.portfolio_list_root}>
            <Typography gutterBottom variant="h4">
                Your Portfolio
            </Typography>

            {!portfolio_list || portfolio_list.length === 0 ?
                (<Typography gutterBottom variant="h6">
                    no published portfolio
                </Typography>):
                <PortfolioList portfolio_list={portfolio_list}/>                      
            }          
        </div>
        
    );
}
