import React from 'react'
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

import SectionEditor from './SectionEditor';

export default function SectionsEditor(props) {


    const addOne = () => {
        const max_num = props.sections.length;
        if (max_num > 0){
            props.onChange(props.sections.concat({ 
                id: (parseInt(props.sections[max_num-1].id) + 1).toString(),
                sectionTitle: "Section" + max_num.toString(), 
                sectionDescription: "des" + max_num.toString(), 
                photo: "link to img" 
            }));
        } else{
            props.onChange(props.sections.concat({ 
                id: max_num.toString(), 
                sectionTitle: "Section" + max_num.toString(), 
                sectionDescription: "des" + max_num.toString(), 
                photo: "link to img" 
            }));
        }
    }
    
    const deleteOne = (index) =>{
        const newSections = props.sections.filter((section) => section.id !== index);
        props.onChange(newSections);
    }

    const updateOne = (modified) => {
        const index = props.sections.findIndex(section => section.id === modified.id);
        const newSections = [...props.sections];
        //console.log(newSections);
        newSections[index] = modified;
        //console.log(newSections);
        props.onChange(newSections);
    }

    
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
                    props.sections.map((section) => (
                        <SectionEditor
                            key={section.id}
                            section={section}
                            handleChange={updateOne}
                            handleRemove={deleteOne}
                        />
                    ))
                }
            </Grid>

            <Grid>             
                <Icon color="primary" onClick={addOne} >add_circle</Icon>      
            </Grid>

        </Grid>
        )
}

