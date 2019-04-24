const {db} = require('./dbConnect');
const Shows = {};


//READ ALL SHOWS
Shows.readAll = () => {
    const sql = `SELECT genres.*, shows.*, users.id AS uid, users.username FROM shows LEFT JOIN genres ON shows.genre_id = genres.id LEFT JOIN users ON shows.user_id = users.id`;
    return db.any(sql, {})
}


// READ SHOWS FOR SPECIFIC GENRE
Shows.readShowsGenre = (genreid) => {
    const sql = `SELECT * FROM shows WHERE genre_id=$[genreid]`;
    return db.any(sql, {genreid})
}

// READ SHOWS FOR SPECIFIC USER
Shows.readShowsUser = (userid) => {
    const sql = `SELECT genres.*, users.*, shows.img_url, shows.title, shows.genre_id, shows.id  FROM shows JOIN users ON users.id = shows.user_id JOIN genres ON shows.genre_id = genres.id WHERE shows.user_id=$[userid]`;
    return db.any(sql, {userid})
}

// READ SPECIFIC SHOW FOR SPECIFIC USER
Shows.readShowUser = (title, userid) => {
    const sql = `SELECT shows.id AS sid, shows.img_url, shows.user_id, shows.title, shows.genre_id, shows.user_id, users.*, genres.*  FROM shows JOIN users ON users.id = shows.user_id JOIN genres ON genres.id = shows.genre_id WHERE shows.title=$[title] AND shows.user_id=$[userid]`;
    return db.any(sql, {title, userid})
}


// READ SPECIFIC SHOW
Shows.readShow = (showid) => {
    const sql = `SELECT shows.*, genres.* FROM shows JOIN genres ON shows.genre_id=genres.id WHERE shows.id=$[showid]`;
    return db.any(sql, {showid})
}

// READ ALL USERS FOR SHOW BY SHOW NAME
Shows.readAllUsersName = (title) => {
    const sql = `SELECT shows.id AS sid, shows.img_url, shows.user_id, shows.genre_id , users.* FROM shows JOIN users ON users.id = shows.user_id WHERE shows.title=$[title]`;
    return db.any(sql, {title})
}


// READ ALL USERS FOR SHOW BY SHOW ID
Shows.readAllUsersID = (id) => {
    const sql = `SELECT shows.*, users.* FROM shows JOIN users ON users.id = shows.user_id WHERE shows.id=$[id]`;
    return db.any(sql, {id})
}

//POST SHOW
Shows.createShow = (title, img_url, user_id, genre_id) =>{
    const sql = `INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($[title], $[img_url], $[user_id], $[genre_id]) RETURNING id`;
    return db.one(sql, {title, img_url, user_id, genre_id })
}

module.exports = Shows;