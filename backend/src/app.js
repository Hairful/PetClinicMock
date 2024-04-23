const express = require('express');
const bodyParser = require('body-parser');

const httpLogger = require('./middlewares/httpLogger');
const { limiter } = require('./middlewares/rateLimit');

const userAuthRoute = require('./routes/userAuthRoute');
const diseaseRoute = require('./routes/diseaseRoute');
const quizRoute = require('./routes/quizRoute');
const caseRoute = require('./routes/caseRoute');
const roleRoute = require('./routes/roleRoute');
const medicineRoute = require('./routes/medicineRoute');
const vtRoute = require('./routes/vtRoute');
const userAdminRoute = require('./routes/userAdminRoute');
const diseaseAdminRoute = require('./routes/diseaseAdminRoute');
const medicineAdminRoute = require('./routes/medicineAdminRoute');
const caseAdminRoute = require('./routes/caseAdminRoute');
const quizAdminRoute = require('./routes/quizAdminRoute');
const vtAdminRoute = require('./routes/vtAdminRoute');
const roleAdminRoute = require('./routes/roleAdminRoute');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(limiter);
app.use(httpLogger);

app.use('', userAuthRoute);
app.use('/disease', diseaseRoute);
app.use('/casestudy/disease', diseaseRoute);
app.use('/quiz', quizRoute);
app.use('/casestudy/case', caseRoute);
app.use('/roleplaying', roleRoute);
app.use('/quiz', quizRoute);
app.use('/medicine', medicineRoute);
app.use('/3DVirtualTour', vtRoute);
app.use('/admin/user', userAdminRoute);
app.use('/admin/disease', diseaseAdminRoute);
app.use('/admin/medicine', medicineAdminRoute);
app.use('/admin/case', caseAdminRoute);
app.use('/admin/quiz', quizAdminRoute);
app.use('/admin', vtAdminRoute);
app.use('/admin/roleplaying', roleAdminRoute);

module.exports = app;