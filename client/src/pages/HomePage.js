import React, { Fragment } from 'react'
import PortfolioList from '../components/PortfolioList'
import { useUserPortfolio} from '../api/userAPI'
import Button from '@material-ui/core/Button';

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
      <div>
        <div>
          <PortfolioList portfolios={portfolios} />
        </div>
      <Button variant="contained" color="primary" href="/portfolio/template">
      Create a new portfolio
      </Button>
      </div>
    )
}
