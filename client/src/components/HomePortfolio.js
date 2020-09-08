import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class HomePortfolio extends Component {

    render() {
        const { id, name, url } = this.props.portfolio
        return (
            <Fragment>
                <p>{name}</p>
                <p>{url}</p>
                <button onClick={this.props.delPortfolio.bind(this, id)}>Delete</button>
            </Fragment>
        )
    }
}

// PropTypes
HomePortfolio.propTypes = {
    portfolio: PropTypes.object.isRequired
}

export default HomePortfolio
