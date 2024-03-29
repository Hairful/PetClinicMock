const express = require('express');
const bodyParser = require('body-parser');
const userAuthRoute = require('./routes/userAuthRoute');
const diseaseRoute = require('./routes/diseaseRoute');
const quizRoute = require('./routes/quizRoute');
const caseRoute = require('./routes/caseRoute');
const cors = require('cors');
const Item = require('./models/Item');
const Case = require('./models/Case');
const Medicine = require('./models/Medicine');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('', userAuthRoute);
app.use('/disease', diseaseRoute);
app.use('/casestudy/disease', diseaseRoute);
app.use('/quiz', quizRoute);
app.use('/casestudy/case', caseRoute);

module.exports = app;