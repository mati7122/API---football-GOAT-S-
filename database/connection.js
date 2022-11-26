const { Sequelize } = require('sequelize');

const ConnectionToDB = () => {
    const sequelize = new Sequelize('api_database', 'root', '123456789', {
        host: 'localhost',
        dialect: 'mysql'
    })

    try {
        sequelize.authenticate();
        console.log('Connection has established correctly')
    }
    catch (err) {
        console.log('An error has ocurred');
    }
}

module.exports = ConnectionToDB;