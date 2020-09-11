import React, { Component, Fragment } from 'react'
import HomePortfolioList from '../components/PortfolioList'
import Profile from '../components/Profile'

class HomePage extends Component {
  
  state = {
    first_name: "FirstName",
    last_name: "LastName", 
    email: "example@gmail.com", 
    phone: "1234567",
    gender: "female", 
    avatar: "",
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

  render() {
    return (
      <Fragment>
        <Profile first_name ={this.state.first_name} 
                last_name={this.state.last_name} 
                email={this.state.email} 
                phone={this.state.phone} 
                gender={this.state.gender} 
                avatar={this.state.avatar}/>
        
        <HomePortfolioList portfolios={this.state.portfolios} />
      </Fragment>
    )
  }
}

export default HomePage;
