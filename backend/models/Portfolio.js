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
  userName: {
    type: String,
    default: '',
    required: true,
  },
  homePage: {
    tag: {
      type: String,
      default: '',
      required: true
    },
    profilePhoto: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    }
  },
  formalPage: {
    tag: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    sections: {
      type: [{
        id: String,
        sectionTitle: String,
        sectionDescription: String,
        photo: String
      }],
      default: []
    },
  },
  leisurePage: {
    tag: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    sections: {
      type: [{
        id: String,
        sectionTitle: String,
        sectionDescription: String,
        photo: String
      }],
      default: []
    },
  },

  contactPage: {
    tag: {
      type: String,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    email: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    photo: {
      type: String,
      default: '',
    },
  }
});

module.exports = mongoose.model('portfolios', UserSchema);
