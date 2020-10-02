import React from 'react'
import Profile from '../components/App/Profile'
import { useUserProfile} from '../api/userAPI'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    block: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function ProfilePage (){
    const classes = useStyles();
    const { loading, user, error } = useUserProfile();
    
    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }


    const {  firstName, lastName, email, phone, gender } = user;
  
  
    return (

            <div className={classes.block}>
                <Profile firstName ={firstName}
                lastName={lastName} 
                email={email} 
                phone={phone} 
                gender={gender} />
            </div>

    )
}
