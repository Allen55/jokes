const express = require('express');
const app = express();
const PORT = 7000;
const routes = require('./api/');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes)

app.get('/', (req, res, next) => {
    res.send('working')
})

app.listen(PORT, async()=> {
    try{
      console.log(`listening on PORT ${PORT}`);
      console.log('connected');

    }
    catch(ex){
      console.log(ex);
    }
});

module.exports = app;