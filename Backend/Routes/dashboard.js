const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

router.get('/', verifyToken, (req, res) => {
  res.json({ message: "Welcome to protected dashboard", userId: req.userId });
});

module.exports = router;