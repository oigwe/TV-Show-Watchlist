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

export {
    readAllShows,
    readAllUsers,
    readIndividual,
    createUser,
    readIndividualUserShows,
}