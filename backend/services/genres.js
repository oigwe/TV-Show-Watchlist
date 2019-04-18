const {db} = require('./dbConnect');
const Genres = {};


//READ ALL GENRES
Genres.readAll = () => {
    const sql = `SELECT * FROM genres`;
    return db.any(sql, {})
}



module.exports = Genres;