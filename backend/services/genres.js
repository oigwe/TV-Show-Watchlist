const {db} = require('./dbConnect');
const Genres = {};


//READ ALL USERS
Genres.readAll = () => {
    const sql = `SELECT * FROM genres`;
    return db.any(sql, {})
}



module.exports = Genres;