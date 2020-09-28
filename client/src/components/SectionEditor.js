import React, { Component } from 'react'
import { Typography, Box, Button, TextField, Grid } from '@material-ui/core';
import UploadPicture from './UploadPicture';

export class Section extends Component {

    state = {
        changed: false,
        id: this.props.section.id,
        sectionTitle: this.props.section.sectionTitle,
        sectionDescription: this.props.section.sectionDescription,
        photo: this.props.section.photo,
    };

    handleChangeTitle = (event) => {
        this.state.sectionTitle = event.target.value;
        this.state.changed = true;
        this.props.handleChange(this.state);
    }

    handleChangeDescription = (event) => {
        this.state.sectionDescription = event.target.value;
        this.state.changed = true;
    }

    handleChangePhoto = (imgUrl) => {
        this.state.photo = imgUrl;
        this.state.changed = true;
        this.props.handleChange(this.state);
    }

    render() {
        return (
            <div >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="sectionTitle"
                            name="sectionTitle"
                            label="Section title"
                            defaultValue={this.state.sectionTitle}
                            onChange={event => this.handleChangeTitle(event)}
                        />
                        <br />
                        <TextField
                            fullWidth
                            multiline
                            rows="5"
                            id="sectionDescription"
                            name="sectionDescription"
                            label="sectionDescription title"
                            defaultValue={this.state.sectionDescription}
                            onChange={event => this.handleChangeTitle(event)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <UploadPicture uploadPicture={this.handleChangePhoto} pictureUrl={this.state.photo} />
                    </Grid>
                </Grid>
            </div >
        )
    }
}

export default Section
