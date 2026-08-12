const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
        allallowNull: false
    }
})

module.exports = category


