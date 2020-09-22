const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  portfolioName: {
    type: String,
    default: '',
    required: true
  },
  portfolioURL: {
    type: String,
    default: '',
    required: true,
  },
  template: {
    type: String,
    default: '',
    required: true,
  },
  homePage:{   
    type: {
      title:{
        type: String,
        default: 'Home',
        required: true
      },
      firstName: {
        type: String,
        default: '',
        required: true
      },
      lastName: {
        type: String,          
        default: '',
        required: true
      },
      email: {
        type: String,          
        required: true,   
      },
      phone:{            
        type: String,
        default: '',
        required: true          
      },
      profilePhoto:{
        type: String,
        default: '',
      } 
    },
        //required: true
  },

  formalPage: {
    type: {
      title:{
      type: String,
      default: 'Academic Background',
      required: true          
      }, 
    },    
        //required: true    
  },

  leisurePage: {
    type: {
      title:{
        type: String,
        default: 'About me',
        required: true
      },
    },
    //required: true    
  }
});

module.exports = mongoose.model('portfolios', UserSchema);
