const express = require('express');
const bodyParser = require('body-parser');
const userAuthRouter = require('./routes/userAuthRoute');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('', userAuthRouter);

module.exports = app;