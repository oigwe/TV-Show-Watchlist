const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');



//ROUTERS
const usersRouter = require('./routes/users');
const genresRouter = require('./routes/genres');
const showsRouter = require('./routes/shows');
/*const commentsRouter = require('./routes/comments');*/

//MIDDLEWARE

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());


//ROUTES
app.use('/users', usersRouter);
app.use('/genres', genresRouter);
app.use('/shows', showsRouter)
/*app.use('/comments', commentsRouter)*/


app.use((err, req, res, next)=>{
    res.status(400).json({error: err.toString()});
})

module.exports = {app,}
