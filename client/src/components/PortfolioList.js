import React, { useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { deletePortfolioByID } from "../api/portfolioAPI"

import '../styles.css';

export default function PortfolioList (props) {
    const {portfolios} = props;
    const [portfolio_list, setPortfolioList] = useState(portfolios);

    function deletePortfolio(portfolioID){
        deletePortfolioByID(portfolioID)
        .then(res => {
            if (res.status === 200) {            
            setPortfolioList(portfolio_list.filter(portfolio => portfolio.portfolioID !== portfolioID)); 
            //alert("Deleted!");
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

    function Portfolio(props) {   

        const { portfolioID, portfolioName, portfolioURL, template} = props.portfolio;
        const editor_url = "/portfolio/editor?temp="+template+"&id="+portfolioID;

        return (
            <div>
            <Paper className='PortfolioListPaper'>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <ButtonBase className="PortfolioImage">
                        <img className="PortfolioImg" alt="complex" src="/static/images/grid/complex.jpg" />
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

            <div className="PortfolioBottomRoot" >  
                <Button variant="contained" color="primary" href={editor_url}>
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
        <div className='FixedHeightContainer'> 
        <br/>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
>
                {props.portfolio_list.map((portfolio, index) => (
                <Grid item key={index} xs={12}>
                    <Portfolio portfolio={portfolio}/>
                </Grid>
                ))
                } 
            </Grid>
        </div>
        )
    }


    return (
        
        <div className='PortfolioListRoot'>
            <Typography gutterBottom variant="h4">
                Your Portfolio
            </Typography>

            {!portfolio_list || portfolio_list.length === 0 ?
                (<Typography gutterBottom variant="h6">
                    no published portfolio
                </Typography>):
                <PortfolioList portfolio_list={portfolio_list} />                      
            }          
        </div>
        
    );
}
