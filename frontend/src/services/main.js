import axios from 'axios';
const port = 9999;


//OTHER FUNCTIONS
 

//AXIOS CALLS

//SHOWS
const readAllShows = () => {
    return axios({
        method: "get",
        url: `http://localhost:${port}/shows/all`,
    });
};

const readIndividualUserShows = (id) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/shows/user/${id}`
    })
};

const createShow = (title, img_url, user_id, genre_id) =>{
    return axios ({
        method: "post",
        url: `http://localhost:${port}/shows/create`,
        data: {
            title: title,
            img_url: img_url,
            user_id: user_id,
            genre_id: genre_id
        }
    })
};

const readUsersForShow = (name) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/shows/${name}/users`
    })
};

const readUsersForShowID = (id) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/shows/${id}/user`
    })
};

const readShow = (id) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/shows/${id}`
    })
};

const readShowForUser = (title, userid) =>{
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/shows/${title}/user/${userid}`,
    })
};


//USERS
const readAllUsers = () => {
    return axios({
        method: "get",
        url: `http://localhost:${port}/users/all`,
    });
};

const readIndividual = (id) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/users/${id}`
    })
}

const createUser = (user) => {
    return axios ({
        method: "post",
        url: `http://localhost:${port}/users/create`,
        data: {
            username: user
        }
    })
};


//GENRES
const readGenres = () => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/genres/all`
    })
};

const readGenreByName = (name) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/genres/name/${name}`
    })
};





//COMMENTS

const readComments = (id) =>{
    return axios ({
        method: "get",
        url: `http://localhost:${port}/comments/${id}`
    })
};

const readCommentsByName = (title) =>{
    return axios ({
        method: "get",
        url: `http://localhost:${port}/comments/title/${title}`
    })
};

const postComment = (comment_body, user_id, showid) =>{
    return axios ({
        method: "post",
        url: `http://localhost:${port}/comments/post/${showid}`,
        data: {
            comment_body: comment_body,
            user_id: user_id, 
        }
    })
};





export {
    readAllShows,
    readAllUsers,
    readIndividual,
    createUser,
    readIndividualUserShows,
    readGenres,
    createShow,
    readGenreByName,
    readUsersForShow,
    readShow,
    readUsersForShowID,
    readComments,
    postComment,
    readShowForUser,
    readCommentsByName,
}