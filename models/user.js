const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    birth: { type: DataTypes.DATE },
    club: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    state: { type: DataTypes.BOOLEAN, defaultValue: true }
}, { timestamps: false });

module.exports = User;