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
        const defaultDescPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1602439052/yx5dbgeeszcgjpem3kse.png";        

        return (
            <div className='SectionContent'>
                {this.state.sections.map((section) => (
                  <div key={section.id} className="SectionRoot">
                    
                    <Grid className="Section"
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                       
                       <Grid item xs={6} >
                           <div className='SectionContainer'>
                               {this.props.sectionsTextBackround?
                                <img className='SectionImage' src={this.props.sectionsTextBackround} alt="unable to load background"/>:
                                <img className='SectionImage' src={defaultDescPhoto} alt="unable to load background"/>
                               }
                                
                                <div className='PortfolioDesc'>
                                    <Typography 
                                        variant="h5" 
                                        component="h5">
                                        {section.sectionTitle} 
                                    </Typography> 
                                    <Typography
                                        variant="h6" 
                                        component="h6">
                                        {section.sectionDescription}
                                    </Typography> 
                                </div> 
                            </div>
                        </Grid>

                        <Grid item xs={6} className='SectionImage'>
                            {section.photo?
                                <img width="600" height="500" src={section.photo} alt="Unable to load" />:
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