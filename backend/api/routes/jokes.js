const router = require('express').Router();
const { Jokes, conn }  = require('/Users/allenharper/Documents/Fullstack Academy/Junior Phase/joke/backend/db/index.js');


// GET /api/jokes
router.get('/', (req, res, next) => {
    res.send('working')
    console.log(Jokes)
    const data = Jokes.findAll();
    //console.log(data.every(user => user instanceof Jokes));
    console.log(`%c${data}`, 'color: green; background: yellow; font-size: 30px')
    console.log(data)
    res.json(data)
})

router.post('/', async (req, res, next) => {
    try {
        const { setup, punchline } = req.body;
        const newJoke = await Jokes.create({setup, punchline});
        res.json(newJoke);
      }
      catch(ex){
        next(ex);
      }
})

module.exports = router;