import React, { Fragment } from 'react'
import Profile from '../components/Profile'
import { useUserProfile} from '../api/userAPI'

export default function ProfilePage (){
 
    const { loading, user, error } = useUserProfile();
    
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }
    
  
    const {  firstName, lastName, email, phone, gender } = user;
  
  
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
