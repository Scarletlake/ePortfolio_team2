import React , { Component  } from 'react'
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

import SectionEditor from './SectionEditor';


export default class SectionsEditor extends Component {

    state = {
        sections: this.props.sections
    };

   
    addOne = () => {
        const length = this.state.sections.length;

        if (length > 0){
            const newSections = this.state.sections.concat({ 
                id: (parseInt(this.state.sections[length-1].id) + 1).toString(),
                sectionTitle: "Section" + length.toString(), 
                sectionDescription: "des" + length.toString(), 
                photo: ""
            });
            this.setState({sections: newSections});
            this.props.onChange(newSections);
        } else{
            const newSections = this.state.sections.concat({ 
                id: length.toString(), 
                sectionTitle: "Section" + length.toString(), 
                sectionDescription: "des" + length.toString(), 
                photo: "" 
            });
            this.setState({sections: newSections});
            this.props.onChange(newSections);
        }
    }
    
    deleteOne = (index) =>{
        const newSections = this.state.sections.filter((section) => section.id !== index);
        this.setState({sections: newSections});
        this.props.onChange(newSections);
    }

  
    updateOne = (modified) => {
        const newSections = [...this.state.sections];
        const index = newSections.findIndex(section => section.id === modified.id);
        newSections[index] = modified;
        this.setState({ sections: newSections });
        this.props.onChange(this.state.sections);
    }

    render() {
        return (
            <Grid spacing={10}
                container
                direction="column"
                justify="center"
                alignItems="center">
    
                <Grid container item spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center">
                    {
                        this.state.sections.map((section) => (
                            <SectionEditor
                                key={section.id}
                                section={section}
                                handleChange={this.updateOne}
                                handleRemove={this.deleteOne}
                            />
                        ))
                    }
                </Grid>
    
                <Grid>             
                    <Icon color="primary" onClick={this.addOne} >add_circle</Icon>      
                </Grid>
    
            </Grid>
            )
    }
}