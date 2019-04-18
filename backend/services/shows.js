const {db} = require('./dbConnect');
const Shows = {};


//READ ALL SHOWS
Shows.readAll = () => {
    const sql = `SELECT * FROM shows`;
    return db.any(sql, {})
}


// READ SHOWS FOR SPECIFIC GENRE
Shows.readShowsGenre = (genreid) => {
    const sql = `SELECT * FROM shows WHERE genre_id=$[genreid]`;
    return db.any(sql, {genreid})
}

// READ SHOWS FOR SPECIFIC USER
Shows.readShowsUser = (userid) => {
    const sql = `SELECT shows.*, users.* FROM shows JOIN users ON users.id = shows.user_id WHERE shows.user_id=$[userid]`;
    return db.any(sql, {userid})
}

// READ SPECIFIC SHOW
Shows.readShow = (showid) => {
    const sql = `SELECT * FROM shows WHERE id=$[showid]`;
    return db.any(sql, {showid})
}

//POST SHOW
Shows.createShow = (title, img_url, user_id, genre_id) =>{
    const sql = `INSERT INTO shows (title, img_url, user_id, genre_id) VALUES ($[title], $[img_url], $[user_id], $[genre_id]) RETURNING id`;
    return db.one(sql, {title, img_url, user_id, genre_id })
}

module.exports = Shows;