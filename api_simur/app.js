'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const api = require('./routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));
app.use(express.static('public'));
app.use('/simur', api);

module.exports = app;