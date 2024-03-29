const express = require('express');
const bodyParser = require('body-parser');
const userAuthRoute = require('./routes/userAuthRoute');
const diseaseRoute = require('./routes/diseaseRoute');
const quizRoute = require('./routes/quizRoute');
const cors = require('cors');
const Item = require('./models/Item');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('', userAuthRoute);
app.use('/disease', diseaseRoute);
app.use('/casestudy/disease', diseaseRoute);
app.use('/quiz', quizRoute);

module.exports = app;