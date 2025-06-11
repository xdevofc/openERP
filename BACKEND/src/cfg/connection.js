const dataConnection = require('../confidential/credentials')
const {Sequelize} = require('sequelize');

// passing parameters
const sequelize = new Sequelize(
    dataConnection.db, 
    dataConnection.username,
    dataConnection.password, 
{
    host:dataConnection.host,
    dialect: dataConnection.dialect 
})

module.exports = sequelize