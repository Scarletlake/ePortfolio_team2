import React, { Fragment } from 'react'
import HomePortfolioList from '../components/PortfolioList'
import Profile from '../components/Profile'
import { getUserProfile, useUserProfile} from '../api/userAPI'

export default function HomePage (){
 
    const { loading, user, error } = useUserProfile();
    
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    
    
    //const {  firstName, lastName, email, phone, gender, avatar, portfolios } = getUserProfile();
    const {  firstName, lastName, email, phone, gender } = user;
  
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
        <Profile firstName ={firstName} 
                lastName={lastName} 
                email={email} 
                phone={phone} 
                gender={gender} />
      </div>
    )
}
