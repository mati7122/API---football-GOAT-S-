const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = User;