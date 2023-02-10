const Sequelize = require('sequelize')


const connection = new Sequelize('guiaperguntas', 'root', 'xa06082002@I', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection