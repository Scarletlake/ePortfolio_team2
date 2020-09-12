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
<<<<<<< HEAD
  
=======
>>>>>>> ouyangh_merge
    const { email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (user) {
        return res
<<<<<<< HEAD
          .status(400)
=======
          .status(409)
>>>>>>> ouyangh_merge
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
<<<<<<< HEAD
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
=======
      token = jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: "1h" },
      );
      res.cookie("Authorization", token, { maxAge: 3600000 });
      return res.status(200).json({
        message: "Authentication succeeded.",
      });
       
>>>>>>> ouyangh_merge
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
}


// Sign in
const userSignIn = async (req, res) => {
<<<<<<< HEAD
=======
    
>>>>>>> ouyangh_merge
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
<<<<<<< HEAD

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
=======
    
    const { email, password } = req.body;
    
    try {
      let user = await User.findOne({ email: email });
      

      if (!user) {
        return res
          .status(401)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      
>>>>>>> ouyangh_merge

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
<<<<<<< HEAD
          .status(400)
=======
          .status(401)
>>>>>>> ouyangh_merge
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

<<<<<<< HEAD
      // generate a token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
=======
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
>>>>>>> ouyangh_merge
    }
}


<<<<<<< HEAD
// Get user by token
const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
=======
// Delete user by email
const deleteUser = async (req, res) => {
    
    try {
      await User.deleteOne({email: req.body.email });
      res.status(200)
        .json({message: "user deleted"});
>>>>>>> ouyangh_merge
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

<<<<<<< HEAD
module.exports = {
    userSignUp,   
    userSignIn,
    getUser
};  

=======

module.exports = {
    userSignUp,   
    userSignIn,
    getUser,
    deleteUser
};  
>>>>>>> ouyangh_merge
