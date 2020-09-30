import React from 'react'
import {usePortfolio} from "../api/portfolioAPI"
import PortfolioEditor from "../components/PortfolioEditor"

export default function UpdatePortfolioForm (props){
  
  // get the data from the original portfolio
  const { loading, res, error } = usePortfolio(props.portfolio_id);
    
  if (loading) {
      return <p>Loading...</p>;    
  }
  if (error) {        
    return <p>Something went wrong: {error.message}</p>;
  }

  const { portfolio } = res;
 
  return (
    <div> 
      <PortfolioEditor portfolio={portfolio} />
    </div>
  )
}
