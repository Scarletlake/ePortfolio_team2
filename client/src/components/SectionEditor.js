import React, { useState } from 'react'

import InputBase from '@material-ui/core/InputBase';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UploadPicture from './UploadPicture';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
      background: "transparent",
        '&:hover': {
      background: "#fafafa",
    },
    input: {
        background: "transparent",
        '&:hover': {
          background: "#f1f1f1",
        }
      },
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
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
            setTitle(val);
            props.handleChange({
                id:props.section.id,
                sectionTitle: val,
                sectionDescription: section_description,
                photo: section_photo
            });
        }    
        else if (nam === "sectionDescription") {
            setDescription(val);
            props.handleChange({
                id:props.section.id,
                sectionTitle: section_title,
                sectionDescription: val,
                photo: section_photo
            });
        }      
    }


    const uploadPicture = (url) =>{
        setPhoto(url);
        props.handleChange({
            id:props.section.id,
            sectionTitle: section_title,
            sectionDescription: section_description,
            photo: url
        });
    }
    

    return (
            <Grid className={classes.root}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <Grid container spacing={5} direction="row">
                    <Grid item xs={5}>
                        {props.section.id}
                        <InputBase 
                            className={classes.input}
                            fullWidth
                            name="sectionTitle"
                            placeholder="sectionDescription"
                            defaultValue={section_title}
                            inputProps={{ 'aria-label': 'description' } , {style: {fontSize: 20}}} 
                            onChange={event => handleChange(event)}                        
                        />
                        
                        <InputBase 
                            className={classes.input}
                            fullWidth
                            multiline
                            rows="5"
                            name="sectionDescription"
                            placeholder="sectionDescription"
                            defaultValue={section_description}
                            inputProps={{ 'aria-label': 'description' },{style: {fontSize: 15}}} 
                            onChange={event => handleChange(event)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <UploadPicture uploadPicture={uploadPicture} pictureUrl={section_photo} />
                    </Grid>
                    
                    <Grid item xs={1}>
                        {isHover?
                        (<Grid>
                            <Icon color="primary" onClick={()=>props.handleRemove(props.section.id)} >delete</Icon>      
                        </Grid>): null}
                    </Grid>
                  </Grid>
                </Grid>
        )
}

