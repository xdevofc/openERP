const {Sequelize, DataTypes} = require('sequelize')


const sequelize = require('../cfg/connection')

const members = require('./members')(sequelize, DataTypes)



module.exports = {
    sequelize, 
    members
}