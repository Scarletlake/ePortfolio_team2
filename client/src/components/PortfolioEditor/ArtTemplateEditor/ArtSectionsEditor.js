import React , { Component  } from 'react'
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

import ArtSectionEditor from './ArtSectionEditor';


export default class SectionsEditor extends Component {

    state = {
        sections: this.props.sections,
        sectionBackground: this.props.sectionBackground
    };

   
    addOne = () => {
        const length = this.state.sections.length;

        if (length > 0){
            const newSections = this.state.sections.concat({ 
                id: (parseInt(this.state.sections[length-1].id) + 1).toString(),
                sectionTitle: "Title",
                sectionDescription: "Description",
                photo: ""
            });
            this.setState({sections: newSections});
            this.props.onChange(newSections);
        } else{
            const newSections = this.state.sections.concat({ 
                id: length.toString(), 
                sectionTitle: "Title",
                sectionDescription: "Description",
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

    componentDidUpdate(prevProps){
        if(prevProps.sectionBackground !== this.props.sectionBackground){
            this.setState({          
                sectionBackground: this.props.sectionBackground
            });
        }
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
    
                <Grid container item
                    direction="column"
                    justify="center"
                    alignItems="center">
                    {
                        this.state.sections.map((section) => (
                            <ArtSectionEditor
                                key={section.id}
                                section={section}
                                handleChange={this.updateOne}
                                handleRemove={this.deleteOne}
                                sectionBackground={this.state.sectionBackground}
                                photoHeight={this.props.photoHeight} photoWidth={this.props.photoWidth}
                            />
                        ))
                    }
                </Grid>
    
                <Grid>             
                    <Icon onClick={this.addOne} >add_circle</Icon>      
                </Grid>
    
            </Grid>
            )
    }
}