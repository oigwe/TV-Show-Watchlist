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

export {
    readAllShows,
    readAllUsers,
    readIndividual,
    createUser,
    readIndividualUserShows,
    readGenres,
    createShow,
    readGenreByName,
}