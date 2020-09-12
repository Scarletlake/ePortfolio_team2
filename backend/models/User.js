const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
  phone:{
    type: String,
    default: '',
   
  },
  gender: {
    type: String,
    enum : ['male','female', 'other'],    
    default: 'other',
    
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '',
    //required: true
  },
  portfolio: {
    type: [{
      portfolioID: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
    
  }
});

module.exports = mongoose.model('user', UserSchema);
