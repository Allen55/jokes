const db = require('./database');
const { Sequelize } = require('sequelize');
const Joke = require('./models/joke.js');


const seedData = async() => {
    await Promise.all([
        Joke.upsert({ 
            question: 'What do you call a pig that does karate?', 
            punchline: 'A pork chop', 
            
        }),
        Joke.upsert({ 
            question: 'Why do oranges wear sunscreen?', 
            punchline: 'So they dont peel', 
            
        })
    ])
}

module.exports = {
    db,
    Joke,
    seedData
}