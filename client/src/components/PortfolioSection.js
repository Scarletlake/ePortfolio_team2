import React , { Component  } from 'react';
import '../styles.css'


export default class PortfolioSection extends Component {

    state = {
        sections: this.props.sections
    };

    render() {
        return (
            <div>
                {this.state.sections.map((section) => (
                  <div className='HorizontalAlign'>
                    <img className='PortfolioImage' src={section.photo} />
                    <div className='PortfolioDescBox'>
                        {section.sectionDescription}
                    </div>
                  </div>
                    
                
                    
                
                ))
                }
            </div>
        )
    }








}