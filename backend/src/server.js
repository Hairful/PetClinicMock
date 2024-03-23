const sequelize = require('./database');
const Medicine = require('./models/Medicine');
const User = require('./models/User');
const Department = require('./models/Department');
const Item = require('./models/Item');
const Case = require('./models/Case');
const Disease = require('./models/Disease');
const Media = require('./models/Media');
const Token = require('./models/Token');
const Prob = require('./models/Prob');
const UserProb = require('./models/UserProb');
const Quiz = require('./models/Quiz');
const UserQuiz = require('./models/UserQuiz');


async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}

// 调用同步函数
syncDatabase();