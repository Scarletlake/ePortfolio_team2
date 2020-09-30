import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles=makeStyles((theme) =>({
    head: {
        marginTop: theme.spacing(40),
        alignItems: "center",
        justifyContent: 'center',
        width: "300px",
        height: "350px",
        margin: "auto",
        position: "flex",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    img: {
        maxWidth: "100%",
        maxHeight: "100%",
        alignItem: "center",
    },
    typ: {
        textAlign: "center",
    },
}));

const NotFound=()=> {
    const classes=useStyles();
    return (

            <div className={classes.head}>
                <img src="/notFound.png" alt="Not Found" className={classes.img}/>
                <h1>
                    <Box fontWeight="fontWeightBold" className={classes.typ}>
                        <i className='fas fa-exclamation-triangle' />
                        Ooops!
                    </Box>
                </h1>
                <Box className={classes.typ}>this page does not exist</Box>
            </div>

  );
}

export default NotFound;
