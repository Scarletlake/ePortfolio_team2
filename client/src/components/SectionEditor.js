import React, { useState } from 'react'

import InputBase from '@material-ui/core/InputBase';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UploadPicture from './UploadPicture';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {
        width: 1000,
        height: 'fit-content',
        padding: theme.spacing(2),
        background: "transparent",
        '&:hover': {
            background: "#fafafa",
        }  
    },
    content: {
        width: 850,
        height: 'fit-content',
    },
    input: {
        width: 350,
        background: "#transparent",
        '&:hover': {
          background: "#f1f1f1",
        }
    },
    text: {
        width: 400,
        height: '100%',
    },
    image: {
        paddingLeft: theme.spacing(2),
        width: 500,
        height: 250,
    },
    icon: {
        width: 75,
        height: '100%',
    },
  }));


export default function SectionEditor(props) {

    const classes = useStyles();

    const [section_title, setTitle] = useState(props.section.sectionTitle);
    const [section_description, setDescription] = useState(props.section.sectionDescription);
    const [section_photo, setPhoto] = useState(props.section.photo);

    const [isHover, setIsHover] = useState(false);

    
    const handleChange = (event) => {
        event.preventDefault(); 
        let nam = event.target.name;
        let val = event.target.value;
    
        if (nam === "sectionTitle") {
            //setTitle(val);
            props.handleChange({
                id:props.section.id,
                sectionTitle: val,
                sectionDescription: section_description,
                photo: section_photo
            });
        }    
        else if (nam === "sectionDescription") {
            //setDescription(val);
            props.handleChange({
                id:props.section.id,
                sectionTitle: section_title,
                sectionDescription: val,
                photo: section_photo
            });
        }      
    }


    const uploadPicture = (url) =>{
        props.handleChange({
            id:props.section.id,
            sectionTitle: section_title,
            sectionDescription: section_description,
            photo: url
        });
    }
    
    
    return (
        <div className={classes.root}>
            <Grid className={classes.section}
                container
                direction="row"
                justify="center"
                alignItems="baseline"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                
                <Grid container item
                    className={classes.text}
                    spacing={2}
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    >
                    <Grid item >
                        <InputBase 
                            className={classes.input}
                            name="sectionTitle"
                            placeholder="sectionDescription"
                            defaultValue={props.section.sectionTitle}
                            inputProps={{ 'aria-label': 'description' } , {style: {fontSize: 20}}} 
                            onChange={event => handleChange(event)}                        
                        />
                    </Grid>

                    <Grid item >                
                        <InputBase 
                            className={classes.input}
                            fullWidth
                            multiline
                            rows="10"
                            name="sectionDescription"
                            placeholder="sectionDescription"
                            defaultValue={props.section.sectionDescription}
                            inputProps={{ 'aria-label': 'description' },{style: {fontSize: 15}}} 
                            onChange={event => handleChange(event)}
                        />
                    </Grid>
                </Grid>

                <Grid item className={classes.image}>
                    <UploadPicture uploadPicture={uploadPicture} pictureUrl={props.section.photo}/>
                </Grid>
            
                <Grid container item className={classes.icon} justify = "flex-end" alignItems="center">
                    {isHover?
                    (<Grid>
                        <Icon color="primary" onClick={()=>props.handleRemove(props.section.id)} >delete</Icon>      
                    </Grid>): null}
                </Grid>

            </Grid>
        </div>
        )
}

