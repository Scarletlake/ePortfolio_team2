import React, { Component } from 'react';
import HomePortfolio from './HomePortfolio';
import PropTypes from 'prop-types';

export class HomePortfolios extends Component {
    render() {
        return this.props.portfolios.map((portfolio) => (
            <HomePortfolio key={portfolio.id} portfolio={portfolio} delPortfolio={this.props.delPortfolio} />
        ));
    }
}

// PropTypes
HomePortfolios.propTypes = {
    portfolios: PropTypes.array.isRequired
}

export default HomePortfolios
