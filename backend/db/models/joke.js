const Sequelize = require('sequelize');
const db = require('../database')

const Joke = db.define('Joke', {
  question: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  punchline: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Joke;