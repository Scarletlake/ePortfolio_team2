import React, { useRef, useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import EditIcon from '@material-ui/icons/Edit';

import { deletePortfolioByID } from "../../api/portfolioAPI"
import DeletionAlert from "./DeletionAlert"
import '../../views/styles.css';

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
        const portfolioURLRef = useRef(null);

        const { portfolioID, portfolioName, portfolioURL, template} = props.portfolio;
        const editor_url = "/portfolio/editor?temp="+template+"&id="+portfolioID;
        
        function copyToClipboard() {
            if (typeof(navigator.clipboard)=='undefined') {
                console.log('navigator.clipboard');
                var textArea = document.createElement("textarea");
                textArea.value = portfolioURL;
                textArea.style.position="fixed"; 
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
            
                try {
                    document.execCommand('copy');                   
                } catch (err) {
                    console.log('unable to copy');
                }
            
                document.body.removeChild(textArea)            
                return;
            }

            navigator.clipboard.writeText(portfolioURL);
        }

        return (
            <div className="PortfolioListSize">
                <Grid className='PortfolioRow' container >
                <Grid 
                    container item
                    direction="row" 
                    spacing={3}
                    justify="space-around"
                    alignItems="baseline"
                    >

                    <Grid item>
                        <Paper className='PortfolioListPaper' elevation={0}>
                            <Grid container 
                                direction="row" 
                                justify="center"
                                alignItems="center" 
                                spacing={5}>
                                <Grid item>
                                    <img width="100" height="100" src="/envelope.png" alt="default" />                                
                                </Grid>

                                <Grid container item xs={10} sm direction="column" spacing={3} >
                                    <Grid item >
                                        <Typography gutterBottom variant="h6">
                                            {portfolioName}
                                        </Typography>
                                    </Grid>   
                                    <Grid container item 
                                            direction="row" 
                                            spacing={5} 
                                            justify="center"
                                            alignItems="center">
                                        <Grid item >                                      
                                            <Link ref={portfolioURLRef} href={portfolioURL}>
                                                {portfolioURL}
                                            </Link>                                                     
                                        </Grid>   

                                        <Grid item >
                                            {
                                            document.queryCommandSupported('copy') &&
                                                <div>
                                                    <Button variant="outlined" color="primary" onClick={copyToClipboard}> Copy Link </Button>  
                                                </div>
                                            }                                                                                         
                                                                                       
                                        </Grid> 

                                    </Grid>
                                </Grid>
                            </Grid>           
                        </Paper>
                    </Grid>   

    
                    <Grid container item className="PortfolioBottonRoot"
                        direction="row"
                        spacing={5} 
                        xs={3}
                        justify="center"
                        alignItems="flex-start">
                      
                        <Grid item>
                            <Button variant="outlined" color="primary"  href={editor_url}> 

                                <Grid container spacing={1}                        
                                    justify="center"
                                    alignItems="center">  
                                    <Grid item>
                                        Edit 
                                    </Grid>
                                    <Grid item>
                                         <EditIcon>  Edit </EditIcon>
                                    </Grid>  
                                </Grid>
                            </Button>                          
                        </Grid>
                        <Grid item>
                            <DeletionAlert handleDelete={()=>deletePortfolio(portfolioID)}/>
                        </Grid> 
                    </Grid>        
                    </Grid >
                </Grid>
            </div>
        )
            
    }


    function PortfolioList(props){
        return(
            <div>
                {props.portfolio_list.map((portfolio, index) => (
                <Grid item key={index} xs={12}>
                    <Portfolio portfolio={portfolio}/>
                </Grid>
                ))
                } 
            </div>
       
        )
    }


    return (
        <div className='PortfolioContainer'>
        
        <Grid  container 
            spacing={5}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className='PortfolioListRoot'>
            
                <Grid item className='FixedHeightContainer'
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {!portfolio_list || portfolio_list.length === 0 ?
                        (<div className='SignSubmit'>
                            <Button variant="contained" color="white" href="/portfolio/template">
                                Create a new portfolio
                            </Button>
                        </div>):
                        <PortfolioList portfolio_list={portfolio_list}/>                     
                    }  
                </Grid> 

        </Grid>
        </div>
    );
}