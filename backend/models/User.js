const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
  first_name: {
    type: String,
    //required: true
  },
  last_name: {
=======
  firstName: {
    type: String,
    //required: true
  },
  lastName: {
>>>>>>> ouyangh_merge
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
<<<<<<< HEAD
    //required: true
  },
  gender: {
    type: String,
    //required: true
=======
    default: '',
   
  },
  gender: {
    type: String,
    enum : ['male','female', 'other'],    
    default: 'other',
    
>>>>>>> ouyangh_merge
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
<<<<<<< HEAD
    type: String
=======
    type: String,
    default: '',
    //required: true
  },
  portfolio: {
    type: [{
      portfolioID: mongoose.Schema.Types.ObjectId,
    }],
    default: [],
    
>>>>>>> ouyangh_merge
  }
});

module.exports = mongoose.model('user', UserSchema);
