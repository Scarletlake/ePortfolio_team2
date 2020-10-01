const express = require('express');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');




// Get portfolio
const getPortfolio = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId( req.params.id );
    const portfolio = await Portfolio.findOne({ _id: id});
    if (!portfolio) {        
      return res.status(500).json({         
        message: "Can not found this portfolio",
      });
    }else {
      return res.status(200).json({
        portfolio: portfolio    
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


// Creat a new portfolio
const createPortfolio = async (req, res) => {

    const { portfolioName, template, userName, homePage, formalPage, leisurePage, contactPage } = req.body;

    try {
      // create a new portfolio object
      const portfolio = await new Portfolio({
        _id: new mongoose.Types.ObjectId(),
        portfolioName: portfolioName,
        portfolioURL: '',
        template: template,
        userName: userName,
        homePage: homePage,
        formalPage: formalPage,
        leisurePage: leisurePage,
        contactPage: contactPage
      });

      portfolio.portfolioURL = "http://localhost:3000/portfolio/" + portfolio._id;
 
      // add the new portfolio to the array           
      const user = await User.findOneAndUpdate(
        { _id: req.userInfo.user.id},
        {
          $push: {
            portfolios: {
              portfolioID: portfolio._id,
              portfolioName: portfolioName,
              portfolioURL: portfolio.portfolioURL,
              template: template
            },
          },
        },
        { returnOriginal: false }
      );
      
      if (!user) {
        console.error("User Not Found");
        return res.status(500).json({  
          message: "User Not Found",
        });
      }
      
      // save it to the database
      await portfolio.save();
   
      return res.status(200).json({
        portfolioURL: portfolio.portfolioURL
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}




// Update user profile
const updatePortfolio = async (req, res) => {
  const { portfolioName, userName, homePage, formalPage, leisurePage, contactPage} = req.body;
  const portfolioID = mongoose.Types.ObjectId( req.params.id );
  
  try {
    
    const user = await User.updateOne(
      { _id: req.userInfo.user.id, "portfolios.portfolioID": portfolioID},
      {
        $set: {
          "portfolios.$.portfolioName": portfolioName,
        },
      },
      { returnOriginal: false }
    );

    if (!user) {
      return res.status(500).json({
        message: "User Not Found",
      });
    }

    const portfolio =  await Portfolio.findOneAndUpdate(
        { _id: portfolioID},       
        { $set: {
            portfolioName: portfolioName,
            userName: userName,
            homePage: homePage,
            formalPage: formalPage,
            leisurePage: leisurePage,
            contactPage: contactPage
          },
        },
        { returnOriginal: false }
    );

    if (!portfolio) {
      return res.status(500).json({
        message: "Portfolio Not Found",
      });
    }

    return res.status(200).json({
      portfolioURL: portfolio.portfolioURL
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}



// Delete user by email
const deletePortfolio = async (req, res) => {
    try {
     
      const id = mongoose.Types.ObjectId( req.params.id );

      // delete from user portfolio array
      const user = await User.findOneAndUpdate(
        { _id: req.userInfo.user.id},
        { $pull: { portfolios: { portfolioID: id } } },
        { returnOriginal: false }
      )

      if (!user) {
        return res.status(500).json({
          message: "User Not Found",
        });
      }
      // delete from portfolio database   
      const portfolio = await Portfolio.findById(req.params.id);
      if(portfolio){
        await portfolio.remove();
      }
      
      res.status(200).json({
        message: "portfolio deleted"
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}


module.exports = {
  getPortfolio,   
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
}; 
