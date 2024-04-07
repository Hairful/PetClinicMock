const sequelize = require('./config/database'); // 导入 Sequelize 实例
const app = require('./app');
const PORT = process.env.PORT || 3000;


sequelize.authenticate()
    .then(async () => {
        console.log('Database connection has been established successfully.');
        //await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });