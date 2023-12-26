const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  console.log('in the another middleware');
  res.sendfile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
