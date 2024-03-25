const sequelize = require('./config/database'); // 导入 Sequelize 实例
const app = require('./app');
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
        // 如果数据库连接成功，启动服务器
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });