const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult } = require('express-validator');
const Portfolio = require('../models/E_Portfolio');


// upload portfolio
const uploadPortfolio = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { first_name, last_name, email, phone_number, gender } = req.body;
  

    portfolio = new Portfolio({
        first_name, 
        last_name, 
        email, 
        phone_number, 
        gender
    });
      
      // hash the password
  
      await portfolio.save();
  
      const payload = {
        user: {
          id: user.id
        }
      };
  
}


module.exports = {
    uploadPortfolio
};  

