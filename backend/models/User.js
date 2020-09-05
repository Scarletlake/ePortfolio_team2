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
    //required: true
  },
  gender: {
    type: String,
    //required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model('user', UserSchema);
