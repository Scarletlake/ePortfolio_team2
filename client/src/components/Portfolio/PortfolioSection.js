import React , { Component  } from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../views/styles.css'
import '../../views/minimalTemplate.css'


export default class PortfolioSection extends Component {

    state = {
        sections: this.props.sections
    };

    render() {
        const defaulPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601626502/hc8a716hhqklmhpfq30j.jpg";
        return (
            <div>
                {this.state.sections.map((section) => (
                  <div key={section.id} className="SectionRoot">
                    
                    <Grid className="Section"
                        container
                        spacing={6}
                        direction="row"
                        justify="center"
                        alignItems="center">
                       
                       <Grid item className='PortfolioDescBox'>
                            <Grid container className='PortfolioDescBox'
                                spacing={3}
                                direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                                >
                                <Grid item className='PortfolioDescBox'>
                                    <Typography 
                                    className='PortfolioDescBox'
                                        variant="h5" 
                                        component="h5">
                                        {section.sectionTitle} 
                                    </Typography> 
                                </Grid>
                               
                                <Grid item className='PortfolioDescBox'>     
                                    <Typography 
                                    className='PortfolioDescBox'
                                        variant="h6" 
                                        component="h6">
                                        {section.sectionDescription}
                                    </Typography>           
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item className='SectionImage'>
                            {section.photo?
                                <img width="600" height="300" src={section.photo} alt="Unable to load" />:
                                <img width="600" height="300" src={defaulPhoto} alt="Unable to load" />
                            }
                        </Grid>
                    </Grid>
                  </div>
                ))
                }
            </div>
        )
    }








}