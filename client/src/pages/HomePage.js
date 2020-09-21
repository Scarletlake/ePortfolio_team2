import React, { Fragment } from 'react'
import PortfolioList from '../components/PortfolioList'
import { useUserPortfolio} from '../api/userAPI'
import Button from '@material-ui/core/Button';

export default function HomePage (){
  
  // for testing only 
  const state = {
    portfolios: [
      {
        portfolioID: 1,
        portfolioName: 'portfolio 1',
        portfolioURL: 'https://eportfolio.com/firstnamelastname/portfolio_1'
      },
      {
        portfolioID: 2,
        portfolioName: 'portfolio 2',
        portfolioURL: 'https://eportfolio.com/firstnamelastname/portfolio_2'
      },
      {
        portfolioID: 3,
        portfolioName: 'portfolio 3',
        portfolioURL: 'https://eportfolio.com/firstnamelastname/portfolio_3'
      },
      {
        portfolioID: 4,
        portfolioName: 'portfolio 4',
        portfolioURL: 'https://eportfolio.com/firstnamelastname/portfolio_4'
      }
    ]
  }


    const { loading, res, error } = useUserPortfolio();
    
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    
    const {portfolios} = res;
    
  
    /*return (
      <Fragment>
        
        <PortfolioList portfolios={state.portfolios} />
      </Fragment>
    )*/

    return (
      <div>
        <div>
          <PortfolioList portfolios={portfolios} />
        </div>
      <Button variant="contained" color="primary" href="/portfolio/template/option">
      Create a new portfolio
      </Button>
      </div>
    )
}
