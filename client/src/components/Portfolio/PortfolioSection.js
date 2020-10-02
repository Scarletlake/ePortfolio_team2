import React , { Component  } from 'react';
import '../../views/styles.css'


export default class PortfolioSection extends Component {

    state = {
        sections: this.props.sections
    };

    render() {
        const defaulPhoto = "http://res.cloudinary.com/do0ecn2sm/image/upload/v1601626502/hc8a716hhqklmhpfq30j.jpg";
        return (
            <div>
                {this.state.sections.map((section) => (
                  <div className='HorizontalAlign'>
                    {section.photo?
                        <img className='SectionImage' src={section.photo} alt="Unable to load" />:
                        <img className='SectionImage' src={defaulPhoto} alt="Unable to load" />
                    }
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