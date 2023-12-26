const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const path = require('path');
const rootDir = require('./util/path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(shopRoutes);
app.use('/admin', adminRoutes);
app.use('/', contactRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3001);
