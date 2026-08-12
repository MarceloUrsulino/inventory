const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const product = db.define('Product', {
    name: {
        type: DataTypes.STRING,
        allallowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER
    }
})

module.exports = product