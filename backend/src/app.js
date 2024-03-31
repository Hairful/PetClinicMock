const express = require('express');
const bodyParser = require('body-parser');
const userAuthRoute = require('./routes/userAuthRoute');
const diseaseRoute = require('./routes/diseaseRoute');
const quizRoute = require('./routes/quizRoute');
const caseRoute = require('./routes/caseRoute');
const roleRoute = require('./routes/roleRoute');
const medicineRoute = require('./routes/medicineRoute');
const vtRoute = require('./routes/vtRoute')
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('', userAuthRoute);
app.use('/disease', diseaseRoute);
app.use('/casestudy/disease', diseaseRoute);
app.use('/quiz', quizRoute);
app.use('/casestudy/case', caseRoute);
app.use('/roleplaying', roleRoute);
app.use('/quiz', quizRoute);
app.use('/medicine', medicineRoute);
app.use('/3DVirtualTour', vtRoute);

module.exports = app;