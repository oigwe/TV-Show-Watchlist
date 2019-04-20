const {db} = require('./dbConnect');
const Users = {};


//READ ALL USERS
Users.readAll = () => {
    const sql = `SELECT * FROM users`;
    return db.any(sql, {})
}


// READ INDIVIDUAL USER
Users.readIndividual = (id) => {
    const sql = `SELECT * FROM users WHERE users.id=$[id]`;
    return db.one(sql, {id})
}

//POST USER
Users.createUser = (username) =>{
    const sql = `INSERT INTO users (username) VALUES ($[username]) RETURNING id`;
    return db.one(sql, {username})
}

module.exports = Users;