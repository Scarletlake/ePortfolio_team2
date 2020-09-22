const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    default: '',
    //required: true
  },
  lastName: {
    type: String,
    default: '',
    //required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone:{
    type: String,
    default: '',
   
  },
  gender: {
    type: String,
    enum : ['male','female',''],    
    default: '',    
  },
  password: {
    type: String,
    required: true
  },
  portfolios: {
    type: [{
      portfolioID: mongoose.Schema.Types.ObjectId,
      portfolioName: String,
      portfolioURL: String,
    }],
    default: [],    
  }
});

module.exports = mongoose.model('user', UserSchema);
