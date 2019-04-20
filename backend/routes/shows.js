const express = require('express');
const tvShowRouter = express.Router();
const ShowServices = require('../services/shows');

//GET ALL SHOWS

tvShowRouter.get('/all', (req, res, next) => {
    ShowServices.readAll()
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});

//GET SHOWS FOR SPECIFIC GENRE
tvShowRouter.get('/genre/:genreid', (req, res, next) => {
    const {genreid} = req.params
    ShowServices.readShowsGenre(genreid)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});


//GET SHOWS FOR SPECIFIC USER

tvShowRouter.get('/user/:userid', (req, res, next) => {
    const {userid} = req.params
    ShowServices.readShowsUser(userid)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});

//GET SPECIFIC ShOW

tvShowRouter.get('/:showid', (req, res, next) => {
    const {showid} = req.params
    ShowServices.readShow(showid)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});


//POST SPECIFIC ShOW

tvShowRouter.post('/create', (req, res, next) => {
    const {title, img_url, user_id, genre_id} = req.body

    ShowServices.createShow(title, img_url, user_id, genre_id)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});
module.exports = tvShowRouter