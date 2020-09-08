import React, { Component, Fragment } from 'react'
import HomePortfolios from '../components/HomePortfolios'

class HomePage extends Component {
  state = {
    portfolios: [
      {
        id: 1,
        name: 'portfolio 1',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_1'
      },
      {
        id: 2,
        name: 'portfolio 2',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_2'
      },
      {
        id: 3,
        name: 'portfolio 3',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_3'
      },
      {
        id: 4,
        name: 'portfolio 4',
        url: 'https://eportfolio.com/firstnamelastname/portfolio_4'
      }
    ]
  }

  delPortfolio = id => {
    console.log(this.state)
    this.setState({ portfolios: [...this.state.portfolios.filter(portfolio => portfolio.id !== id)] })
  };

  render() {
    return (
      <Fragment>
        <h2>Your Portfolio</h2>
        <HomePortfolios portfolios={this.state.portfolios} delPortfolio={this.delPortfolio} />
      </Fragment>
    )
  }
}

export default HomePage;
