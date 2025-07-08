const express = require('express');
const path = require('node:path');
const app = express();

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messageRoute = require('./routes/messages');
app.use('/', messageRoute);

app.listen(3000);
