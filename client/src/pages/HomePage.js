import React, { Fragment } from 'react'
import PortfolioList from '../components/PortfolioList'
import { useUserPortfolio} from '../api/userAPI'
import Button from '@material-ui/core/Button';
import '../styles.css'


export default function HomePage (){


    const { loading, res, error } = useUserPortfolio();
    
    if (loading) {
        return <p>Loading...</p>;
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
