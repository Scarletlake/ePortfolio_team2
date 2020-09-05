const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const usersController = require('../controllers/usersController.js');
const portfolioController = require('../controllers/portfolioController.js');

// @route    POST api/user/signin
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/portfolio',
  [
    check('first_name', 'Please include a firstname').exists(),
    check('last_name', 'Please include a firstname').exists(),
    check('email', 'Please include a valid email').exists()(),
    check('phone_number', 'Please include a phone number').exists(),
    check('gender', 'Please include a gender').exists()
  ],
  portfolioController.uploadPortfolio
);


// @route    GET api/user
// @desc     Get user by token
// @access   Private
router.get('/', auth, usersController.getUser);


module.exports = router;
