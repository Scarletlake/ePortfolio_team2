const express = require('express');
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
        email,
        password
      });
      
      // hash the password
      const salt = await bcrypt.genSalt(10); 
      user.password = await bcrypt.hash(password, salt);
  
      await user.save();
  
      const payload = {
        user: {
          id: user.id
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
          id: user.id
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
const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password -__v -_id');

      if (!user) {
        return res.status(500).json({
          message: "User Not Found",
        });
      }else {
        res.status(200).json({
          firstName: user.firstName,
          lastName: user.lastName, 
          phone: user.phone, 
          gender: user.gender, 
          avatar: user.gender, 
          portfolios: user.portfolios,
          email: user.email,
    
        });
      }
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
    getUser,
    deleteUser
};  
