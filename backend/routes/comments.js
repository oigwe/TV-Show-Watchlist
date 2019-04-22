const express = require('express');
const tvShowRouter = express.Router();
const CommentServices = require('../services/comments');

//GET ALL COMMENTS FOR SPECIFIC SHOW

tvShowRouter.get('/:showid', (req, res, next) => {
    const {showid} = req.params
    CommentServices.readCommentsPerShow(showid)
        .then(data => {
            res.json({
                "data": data
            });
        })
        .catch(err =>{
            next(err)
        });
});

//POST COMMENTS FOR SPECIFIC SHOW

tvShowRouter.post('/post/:showid', (req, res, next) => {
    const {showid} = req.params
    const {comment_body, user_id} = req.body
    CommentServices.postComment(comment_body, user_id, showid)
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