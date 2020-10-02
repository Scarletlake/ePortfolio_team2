import React, { Component  } from 'react'

import InputBase from '@material-ui/core/InputBase';
import { Grid } from '@material-ui/core';
import UploadPicture from './UploadPicture';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = (theme) => ({
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
  });

class SectionEditor extends Component {

    state = {
        isHover: false,
        changed: false,
        id: this.props.section.id,
        sectionTitle: this.props.section.sectionTitle,
        sectionDescription: this.props.section.sectionDescription,
        photo: this.props.section.photo,
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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid className={classes.section}
                    container
                    direction="row"
                    justify="center"
                    alignItems="baseline"
                    onMouseEnter={() => this.setState({isHover: true})}
                    onMouseLeave={() => this.setState({isHover: false})}>
                    
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
                                defaultValue={this.props.section.sectionTitle}
                                inputProps={{style: {fontSize: 20}}} 
                                onChange={event => this.handleChangeTitle(event.target.value)}                        
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
                                defaultValue={this.props.section.sectionDescription}
                                inputProps={{style: {fontSize: 15}}} 
                                onChange={event => this.handleChangeDescription(event.target.value)}
                            />
                        </Grid>
                    </Grid>
    
                    <Grid item className={classes.image}>
                        <UploadPicture uploadPicture={this.handleChangePhoto} pictureUrl={this.props.section.photo}/>
                    </Grid>
                
                    <Grid container item className={classes.icon} justify = "flex-end" alignItems="center">
                        {this.state.isHover?
                        (<Grid>
                            <Icon color="primary" onClick={()=>this.props.handleRemove(this.props.section.id)} >delete</Icon>      
                        </Grid>): null}
                    </Grid>
                </Grid>
            </div>
            )
    }
}

export default withStyles(styles)(SectionEditor);