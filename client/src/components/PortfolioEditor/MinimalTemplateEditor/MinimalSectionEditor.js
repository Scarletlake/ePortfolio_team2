import React, { Component } from 'react'

import InputBase from '@material-ui/core/InputBase';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import '../../../views/artTemplateEditor.css'
import UploadPicture from '../UploadPicture';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    section: {

        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        background: "transparent",
    },
    content: {
        width: 'fit-content',
        height: 'fit-content',        
        "background-size": "cover",
        "background-repeat": "no-repeat", 
    },
    input: {
        [theme.breakpoints.down('sm')]: {
           width:150,
            height:"80%"
        },
        [theme.breakpoints.up('md')]: {
            width:300,
            height:"100%"
        },
        [theme.breakpoints.up('lg')]: {
            width:500,
            height:"100%"
        },

        background: "#transparent",
        '&:hover': {
          background: "#f1f1f1",
        },
        "font-family": "Arial, Helvetica, sans-serif"
    },
    inputCenter: {
        textAlign: 'center',
    },
    text: {
        width:'fit-content',
        height: 'fit-content',
        padding: theme.spacing(5),
        paddingTop: theme.spacing(15),
    },
    image: {
        width: 'fit-content',
        height: 'fit-content',
    },
    icon: {
        position: "absolute",
    },
  });

class SectionEditor extends Component {

    state = {
        isHover: false,
        changed: false,
        id: this.props.section.id,
        sectionTitle: this.props.section.sectionTitle,
        sectionDescription: this.props.section.sectionDescription,
        photo: this.props.section.photo,
        sectionBackground: this.props.sectionBackground
    };

    handleChangeTitle = (val) => {
        this.setState({sectionTitle: val})
        this.setState({changed: true});
        this.props.handleChange(this.state);
    }

    handleChangeDescription = (val) => {
        this.setState({sectionDescription: val});
        this.setState({changed: true});
        this.props.handleChange(this.state);
    }

    handleChangePhoto = (imgUrl) => {
        this.setState({photo: imgUrl});
        this.setState({changed: true});
        this.props.handleChange(this.state);
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.sectionBackground !== this.props.sectionBackground){
            this.setState({          
                sectionBackground: this.props.sectionBackground
            });
        }
    }

    render() {


        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container
                      className={classes.section}
                      direction="row"
                      justify="center"
                      alignItems="flex-start"
                      onMouseEnter={() => this.setState({isHover: true})}
                      onMouseLeave={() => this.setState({isHover: false})}
                    >
                    <Grid container
                          className={classes.content}
                          direction="row"
                        justify="center"
                        alignItems="center"
                        style={{ backgroundImage:`url(${this.state.sectionBackground})`}}>
                        
                        <Grid container
                            className={classes.text}
                            spacing={2}
                            direction="column"
                            justify="center"
                            alignItems="center"
                            >
                            <Grid item >
                                <InputBase 
                                    className={classes.input}
                                    classes={{input: classes.inputCenter}}
                                    name="sectionTitle"
                                    placeholder="sectionDescription"
                                    defaultValue={this.props.section.sectionTitle}
                                    inputProps={{style: {fontSize: 20}}} 
                                    onChange={event => this.handleChangeTitle(event.target.value)}                        
                                />
                            </Grid>
        
                            <Grid item >                
                                <InputBase 
                                    className={classes.input}
                                    classes={{input: classes.inputCenter}}
                                    fullWidth
                                    multiline
                                    rows="10"
                                    name="sectionDescription"
                                    placeholder="sectionDescription"
                                    defaultValue={this.props.section.sectionDescription}
                                    inputProps={{style: {fontSize: 15}}} 
                                    onChange={event => this.handleChangeDescription(event.target.value)}
                                />
                            </Grid>
                        </Grid>
        
                        <Grid item className={classes.image}>
                            <UploadPicture uploadPicture={this.handleChangePhoto} 
                                        pictureUrl={this.props.section.photo}
                                        height={this.props.photoHeight} width={this.props.photoWidth}/>
                        </Grid>
                    </Grid>
                    {this.state.isHover?
                        (<Grid item>
                                <Icon className={classes.icon} onClick={()=>this.props.handleRemove(this.props.section.id)}>delete</Icon>      
                        </Grid>): null}
                </Grid>
            </div>
            )
    }
}

export default withStyles(styles)(SectionEditor);