import React, { useRef, useState }from 'react';
import PortfolioList from '../components/App/PortfolioList'
import { useUserPortfolio} from '../api/userAPI'
import Button from '@material-ui/core/Button';
import '../views/styles.css'
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        marginTop: theme.spacing(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function HomePage (){
    const classes = useStyles();

    const { loading, res, error } = useUserPortfolio();

    if (loading) {
        return (
            <div className={classes.loading}>
                <CircularProgress/>
            </div>
        )
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    
    const {portfolios} = res;
    const [portfolio_list, setPortfolioList] = portfolios
    
    return (
      <div className='PageContainer'>

          <div>
            <PortfolioList portfolios={portfolios} />
          </div>

    
          {portfolio_list ?
            <div className='SignSubmit'>
                <Button variant="contained" color="primary" href="/portfolio/template">
                Create a new portfolio
                </Button>
            </div> : <div> </div>
          }
      </div>
    )
}
