const {db} = require('./dbConnect');
const Comments = {};


//READ ALL COMMENTS PER SPECIFIC SHOW
Comments.readCommentsPerShow = (showid) => {
    const sql = `SELECT comments.*, users.* FROM comments JOIN users on users.id = comments.user_id WHERE show_id = $[showid]`;
    return db.any(sql, {showid})
}

//READ ALL COMMENTS PER SPECIFIC SHOW BY TITLE
Comments.readCommentsPerShowName = (title) => {
    const sql = `SELECT comments.*, users.*, shows.* FROM comments JOIN users on users.id = comments.user_id  JOIN shows ON shows.id = comments.show_id WHERE shows.title = $[title]`;
    return db.any(sql, {title})
}


//POST COMMENTS PER SPECIFIC SHOW
Comments.postComment = (comment_body, user_id, showid) => {
    const sql = `INSERT INTO comments (comment_body, user_id, show_id) VALUES ($[comment_body], $[user_id], $[showid]) RETURNING id`;
    return db.one(sql, {comment_body, user_id, showid})
}


module.exports = Comments;