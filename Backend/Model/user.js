const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  provider: { type: String, required: true }, // 'manual', 'google', 'facebook', etc.
  providerId: String,                         // for social login users only
  name: String,                              // optional
  email: { type: String, required: false, unique: true },
  password: String,                          // only for manual users
  profilePic: String,
});

module.exports = mongoose.model('User', userSchema);
