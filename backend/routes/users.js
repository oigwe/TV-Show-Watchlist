const express = require('express');
const tvShowRouter = express.Router();
const UserServices = require('../services/users');

//GET ALL USERS

tvShowRouter.get('/all', (req, res, next) => {
    UserServices.readAll()
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});

//GET SINGLE USER
tvShowRouter.get('/:id', (req, res, next) => {
    const {id} = req.params
    UserServices.readIndividual(id)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});


//POST NEW USER

tvShowRouter.post('/create', (req, res, next) => {
    const {username} = req.body
    UserServices.createUser(username)
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