const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../config/passport');

const router = express.Router();

// Generate JWT token with MongoDB _id
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Send token to frontend on successful auth
const sendToken = (req, res) => {
  const token = generateToken(req.user);
  const redirectBase = process.env.FRONTEND_URL || "http://localhost:5173";
  res.redirect(`${redirectBase}/social-auth-success?token=${token}`);
};

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  sendToken
);

// GitHub Auth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get(
  '/github/callback',
  passport.authenticate('github', { session: false }),
  sendToken
);

// Facebook Auth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  sendToken
);

module.exports = router;
