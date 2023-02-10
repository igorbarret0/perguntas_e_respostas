const { DataTypes } = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false  // impede que esse campo receba um valor nulo
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false})

module.exports = Pergunta