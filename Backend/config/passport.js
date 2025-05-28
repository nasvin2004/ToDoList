const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../Model/user');
require('dotenv').config();

const handleUser = async (profile, provider, done) => {
  try {
    const email = profile.emails?.[0]?.value || '';

    // Try to find user by email
    if (email) {
      let userByEmail = await User.findOne({ email });
      if (userByEmail) return done(null, userByEmail);
    }

    // Otherwise, try finding by providerId and provider
    let userByProvider = await User.findOne({ providerId: profile.id, provider });
    if (userByProvider) return done(null, userByProvider);

    // Create new user
    const newUser = new User({
      provider,
      providerId: profile.id,
      name: profile.displayName || profile.username || 'NoName',
      email,
      profilePic: profile.photos?.[0]?.value || '',
    });

    await newUser.save();
    done(null, newUser);
  } catch (err) {
    done(err, null);
  }
};


// Google
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  handleUser(profile, 'google', done);
}));

// GitHub
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
}, (accessToken, refreshToken, profile, done) => {
  handleUser(profile, 'github', done);
}));

// Facebook
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => {
  handleUser(profile, 'facebook', done);
}));

// Session not needed
passport.serializeUser((user, done) => done(null, user));
