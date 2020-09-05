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
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
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
    check('password', 'Password is required').exists()
  ],
  usersController.userSignIn
);


// @route    GET api/user
// @desc     Get user by token
// @access   Private
router.get('/', auth, usersController.getUser);


module.exports = router;
