const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/jokesdb', {
    logging: false
})


module.exports = db