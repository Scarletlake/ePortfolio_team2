const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  first_name: {
    type: String,
    //required: true
  },
  last_name: {
    type: String,
    //required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone_number:{
    type: String,
    //required: true
  },
  gender: {
    type: String,
    //required: true
  }
//   photo: {
//     type: ,
//     // required: true
//   },
});

module.exports = mongoose.model('portfolio', portfolioSchema);
