import axios from 'axios';


//OTHER FUNCTIONS
 

//AXIOS CALLS
const port = 9999;


const readAllShows = () => {
    return axios({
        method: 'get',
        url: `http://localhost:${port}/shows/all`,
    });
};

const readAllUsers = () => {
    return axios({
        method: 'get',
        url: `http://localhost:${port}/users/all`,
    });
};

const readIndividual = (id) => {
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/users/${id}`
    })
}

const createUser = (user) => {
    return axios ({
        method: 'post',
        url: `http://localhost:${port}/users/create`,
        data: {
            username: user
        }
    })
}

const readIndividualUserShows = (id) => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/shows/user/${id}`
    })
}

const readGenres = () => {
    return axios ({
        method: "get",
        url: `http://localhost:${port}/genres/all`
    })
}

const createShow = (title, img_url, user_id, genre_id) =>{
    return axios ({
        method: 'post',
        url: `http://localhost:${port}/shows/create`,
        data: {
            title: title,
            img_url: img_url,
            user_id: user_id,
            genre_id: genre_id
        }
    })
}

const readGenreByName = (name) => {
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/genres/name/${name}`
    })
}

const readUsersForShow = (name) => {
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/shows/${name}/users`
    })
}

const readUsersForShowID = (id) => {
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/shows/${id}/user`
    })
}

const readShow = (id) => {
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/shows/${id}`
    })
}

const readComments = (id) =>{
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/comments/${id}`
    })
}

const readCommentsByName = (title) =>{
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/comments/title/${title}`
    })
}

const postComment = (comment_body, user_id, showid) =>{
    return axios ({
        method: 'post',
        url: `http://localhost:${port}/comments/post/${showid}`,
        data: {
            comment_body: comment_body,
            user_id: user_id, 
        }
    })
}

const readShowForUser = (title, userid) =>{
    return axios ({
        method: 'get',
        url: `http://localhost:${port}/shows/${title}/user/${userid}`,
    })
}


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