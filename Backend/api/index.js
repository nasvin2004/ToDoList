  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  require('dotenv').config();

  const app = express();

  app.use(express.json());
  const allowedOrigins = [
    "http://localhost:5173",
    "https://todolist-frontend-app.onrender.com"
  ];

  app.use(cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS policy does not allow access from this origin."), false);
      }
      return callback(null, true);
    },
    credentials: true, // if you need cookies or auth headers
  }));
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  app.use('/auth', require('../Routes/social-login'));
  app.use('/auth', require('../Routes/manual-login'));
  app.use('/tasks', require('../Routes/task'));
  app.use('/dash', require('../Routes/dashboard'));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
