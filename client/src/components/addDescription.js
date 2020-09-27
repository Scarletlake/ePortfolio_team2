import React, { Component } from 'react'
import { AppBar, Tabs, Toolbar, Tab, Typography, Box, Button, TextField } from '@material-ui/core';
import UploadPicture from './UploadPicture';

export class addDescription extends Component {

    state = { sections: this.props.sections };

    // onChange = () => this.setState()

    // component = {

    // }

    addOne = () => {
        const max_num = this.state.sections.length + 1;
        this.props.onClick({ sections: [...this.state.sections, { sectionTitle: max_num.toString(), sectionDescription: "", photo: "" }] });
        this.setState({ sections: [...this.state.sections, { sectionTitle: max_num.toString(), sectionDescription: "", photo: "" }] });
    }

    render() {
        return (
            <div>
                {
                    this.state.sections.map((section) => (
                        <div key={section.sectionTitle}>
                            <p>{section.sectionTitle}</p>
                            <p>{section.sectionDescription}</p>
                            <p>{section.photo}</p>
                        </div>
                    ))
                }
                <Button variant="outlined" color="primary" onClick={this.addOne} >Add</Button>
            </div>
        )
    }
}

export default addDescription
