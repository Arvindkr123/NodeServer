const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');

router.get('/contactus', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/success', (req, res, next) => {
  res.send('Form successfuly filled');
});

module.exports = router;
