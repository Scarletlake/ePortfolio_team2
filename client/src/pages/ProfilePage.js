import React from 'react'
import Profile from '../components/App/Profile'
import { useUserProfile} from '../api/userAPI'
import {makeStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    block: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(50),
            height: theme.spacing(60),
        },
        alignItems: 'center',
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

            <div className={classes.root}>
                <Paper elevation={3}>
                    <Profile firstName ={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    gender={gender} />
                </Paper>
            </div>

    )
}
