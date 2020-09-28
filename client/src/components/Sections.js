import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import Section from './Section';

export default class Sections extends Component {

    state = {
        sections: this.props.sections
    };

    static getDerivedStateFromProps(props) {
        return {
            sections: props.sections,
        }
    }

    addOne = () => {
        const max_num = this.state.sections.length + 1;
        this.props.onClick(this.state.sections.concat({ id: max_num.toString(), sectionTitle: "Section" + max_num.toString(), sectionDescription: "des" + max_num.toString(), photo: "link to img" }));
    }

    handleChange = (modified) => {
        this.setState({
            sections: this.state.sections.map((section) => (
                (section.id == modified.id ? section.sectionTitle = modified.sectionTitle : section.sectionTitle = section.sectionTitle) &&
                (section.id == modified.id ? section.sectionDescription = modified.sectionDescription : section.sectionDescription = section.sectionDescription) &&
                (section.id == modified.id ? section.photo = modified.photo : section.photo = section.photo)
            ))
        });
        this.props.onClick(this.state.sections);
    }

    render() {
        return (
            <div>
                {
                    this.state.sections.map((section) => (
                        <Section
                            key={section.id}
                            section={section}
                            handleChange={this.handleChange}
                        />
                    ))
                }
                <Button variant="outlined" color="primary" onClick={this.addOne} >Add section</Button>
            </div>
        )
    }
}

