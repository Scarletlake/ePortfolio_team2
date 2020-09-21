import React, { Fragment } from 'react'
import PortfolioList from '../components/PortfolioList'
import { useUserPortfolio} from '../api/userAPI'

export default function HomePage (){
  
  // for testing only 
  const state = {
    firstName: "FirstName",
    lastName: "LastName", 
    email: "emailIsNotEditable@gmail.com", 
    phone: "123456789",
    gender: "female", 
    avatar: "",
    portfolios: [
      {
        id: 1,
        name: 'portfolio 1',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_1'
      },
      {
        id: 2,
        name: 'portfolio 2',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_2'
      },
      {
        id: 3,
        name: 'portfolio 3',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_3'
      },
      {
        id: 4,
        name: 'portfolio 4',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_4'
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
        <Profile firstName ={state.firstName} 
                lastName={state.lastName} 
                email={state.email} 
                phone={state.phone} 
                gender={state.gender} 
                avatar={state.avatar}/>
        
        <HomePortfolioList portfolios={state.portfolios} />
      </Fragment>
    )*/

    return (
      <div>
        <PortfolioList portfolios={portfolios} />
      </div>
    )
}
