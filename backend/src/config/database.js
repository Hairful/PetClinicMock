const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('PetClinicMock', 'PCM', 'Pcm123456@', {
    host: 'rm-uf6ow60l06e5otd9ego.mysql.rds.aliyuncs.com',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize;