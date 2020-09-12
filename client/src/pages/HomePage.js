import React, { Fragment } from 'react'
import HomePortfolioList from '../components/PortfolioList'
import Profile from '../components/Profile'
//import { getUserProfile, useUserProfile} from '../api/userAPI'

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


    /*const { loading, user, error } = useUserProfile();
    
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }*/
    
    
    //const {  firstName, lastName, email, phone, gender, avatar, portfolios } = getUserProfile();
    //const {  firstName, lastName, email, phone, gender, avatar, portfolios } = user;
  
    return (
      <Fragment>
        <Profile firstName ={state.firstName} 
                lastName={state.lastName} 
                email={state.email} 
                phone={state.phone} 
                gender={state.gender} 
                avatar={state.avatar}/>
        
        <HomePortfolioList portfolios={state.portfolios} />
      </Fragment>
    )

    /*return (
      <Fragment>
        <p>{email}</p>
        <Profile firstName ={firstName} 
                lastName={lastName} 
                email={email} 
                phone={phone} 
                gender={gender} 
                avatar={avatar}/>
        
        <HomePortfolioList portfolios={portfolios} />
      </Fragment>
    )*/
}
