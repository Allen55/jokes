const jokesRouter = require('./routes/jokes.js');
const express = require('express');
const router = express.Router();

router.use('/jokes', jokesRouter);

router.get('/', (req, res, next) => {
    res.send('/api working')
})

module.exports = router;