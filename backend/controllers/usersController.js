const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult } = require('express-validator');
const User = require('../models/User');



// Sign up
const userSignUp = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (user) {
        return res
          .status(409)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      
      // add the user to database
      user = new User({
        _id: new mongoose.Types.ObjectId(),
        email,
        password
      });
      
      // hash the password
      const salt = await bcrypt.genSalt(10); 
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
  
      const payload = {
        user: {
          id: user._id
        }
      };
  
      // generate a token
      token = jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: "1h" },
      );
      res.cookie("Authorization", token, { maxAge: 3600000 });
      return res.status(200).json({
        message: "Authentication succeeded.",
      });
       
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
}


// Sign in
const userSignIn = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password } = req.body;
    
    try {
      let user = await User.findOne({ email: email });
      

      if (!user) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user._id
        }
      };

      token = jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: "1h" },
      );
      res.cookie("Authorization", token, { maxAge: 3600000 });
      return res.status(200).json({
        message: "Authentication succeeded.",
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}




// Get user by token
const getUserProfile = async (req, res) => {
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
const getUserPortfolio = async (req, res) => {
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
const updateUserProfile = async (req, res) => {
  
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
const deleteUser = async (req, res) => {
    
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
    userSignUp,   
    userSignIn,
    getUserProfile,
    getUserPortfolio,
    deleteUser,
    updateUserProfile
}; 
