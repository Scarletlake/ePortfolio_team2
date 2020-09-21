const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const portfolioController = require('../controllers/portfolioController.js');




// @route    GET api/portfolio/
// @desc     get the portfolio
// @access   Public
router.get('/', portfolioController.getPortfolio);


// @route    POST api/portfolio/profile
// @desc     Creat the portfolio
// @access   Private
router.post('/profile', auth ,portfolioController.createPortfolio);


// @route    POST api/portfolio/profile
// @desc     Update the portfolio
// @access   Private
router.post('/profile', auth ,portfolioController.updatePortfolio);


// @route    GET api/portfolio/delete
// @desc     Delete the portfolio
// @access   Private
router.delete('/delete', auth, portfolioController.deletePortfolio);

module.exports = router;
