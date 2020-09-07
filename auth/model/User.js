const mongoose = require('mongoose');
const useSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 4,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 4,
    },
    date: {
        type: Date,
        default:Date.now
  }
});

module.exports = mongoose.model('User', 'UserSchema');