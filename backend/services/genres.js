const {db} = require('./dbConnect');
const Genres = {};


//READ ALL GENRES
Genres.readAll = () => {
    const sql = `SELECT * FROM genres`;
    return db.any(sql, {})
}

//READ GENRE BY NAME

Genres.readName = (name) =>{
    const sql = `SELECT genres.id FROM genres WHERE genre_name=$[name]`;
    return db.one(sql, {name})
}

module.exports = Genres;