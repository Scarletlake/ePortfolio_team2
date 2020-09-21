const express = require('express');
const mongoose = require("mongoose");
const { validationResult } = require('express-validator');
const User = require('../models/User');



// Get user by token
const getPortfolio = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.userInfo.user.id });
      if (!user) {        
        return res.status(500).json({         
          message: "User Not Found",
        });
      }else {
        return res.status(200).json({
          firstName: user.firstName,
          lastName: user.lastName, 
          email: user.email,
          phone: user.phone, 
          gender: user.gender, 
          portfolios: user.portfolios,    
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

// Get user by token
const createPortfolio = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userInfo.user.id });
    if (!user) {        
      return res.status(500).json({         
        message: "User Not Found",
      });
    }else {
      return res.status(200).json({
        portfolios: user.portfolios,    
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


// Update user profile
const updatePortfolio = async (req, res) => {
  
  const { firstName, lastName, phone, gender } = req.body;
  
  try {
    await User.findOneAndUpdate(
      { _id: req.userInfo.user.id },
      { $set: { 
        firstName: firstName,
        lastName: lastName,      
        phone: phone, 
        gender: gender},
      },
      { returnOriginal: false }
    );
    
    res.status(200).json({
        message: "Update successful!",
    });
   
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}



// Delete user by email
const deletePortfolio = async (req, res) => {
    
    try {
      await User.deleteOne({email: req.body.email });
      res.status(200)
        .json({message: "user deleted"});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}


module.exports = {
  getPortfolio,   
  createPortfolio,
  updatePortfolio,
  deletePortfolio
}; 
