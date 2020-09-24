const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const portfolioController = require('../controllers/portfolioController.js');




// @route    GET api/portfolio/id
// @desc     get the portfolio
// @access   Public
router.get('/:id', portfolioController.getPortfolio);

// @route    DELETE api/portfolio/id
// @desc     Delete the portfolio
// @access   Private
router.delete('/:id', auth, portfolioController.deletePortfolio);


// @route    POST api/portfolio/create
// @desc     Creat the portfolio
// @access   Private
router.post('/new', auth ,portfolioController.createPortfolio);


// @route    POST api/portfolio/update
// @desc     Update the portfolio
// @access   Private
router.post('/:id', auth ,portfolioController.updatePortfolio);


module.exports = router;
