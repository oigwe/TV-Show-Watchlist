const express = require('express');
const tvShowRouter = express.Router();
const GenreServices = require('../services/genres');

//GET ALL GENRES

tvShowRouter.get('/all', (req, res, next) => {
    GenreServices.readAll()
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});

//GET GENRE BY NAME

tvShowRouter.get('/name/:name', (req, res, next)=>{
    const {name} = req.params
    GenreServices.readName(name)
        .then(data =>{
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        })
})


module.exports = tvShowRouter