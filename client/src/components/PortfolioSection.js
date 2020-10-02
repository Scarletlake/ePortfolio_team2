import React , { Component  } from 'react';
import '../styles.css'


export default class PortfolioSection extends Component {

    state = {
        sections: this.props.sections
    };

    render() {
        const defaulPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601620748/vtdnrfjdkbrfj7vfwudd.jpg";
        return (
            <div>
                {this.state.sections.map((section) => (
                  <div className='HorizontalAlign'>
                    <img className='PortfolioImage' src={section.photo} alt={defaulPhoto}/>
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