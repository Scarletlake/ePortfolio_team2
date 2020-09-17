const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const usersController = require('../controllers/usersController.js');


// @route    POST api/user/signup
// @desc     Register user
// @access   Public
router.post(
  '/signup',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password between 6 to 16 characters'
    ).isLength({ min: 6, max: 16})
  ],
  usersController.userSignUp
);



// @route    POST api/user/signin
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/signin',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password between 6 to 16 characters'
    ).isLength({ min: 6, max: 16})
  ],
  usersController.userSignIn
);


// @route    GET api/user
// @desc     Get user by token
// @access   Private
router.get('/profile', auth, usersController.getUser);


// @route    POST api/user
// @desc     Get user by token then update user's profile
// @access   Private
router.post('/profile', auth ,usersController.updateUser);


// @route    GET api/user/delete
// @desc     Get user by token
// @access   Public
router.delete('/delete', usersController.deleteUser);

module.exports = router;
