import React from 'react'
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
    
    return (
      <div className='ContentWrap PageContainer'>
        <div>
          <PortfolioList portfolios={portfolios} />
        </div>

        <br/><br/>
        <div className='SignSubmit'>
          <Button variant="contained" color="primary" href="/portfolio/template">
          Create a new portfolio
          </Button>
        </div>
      </div>
    )
}
