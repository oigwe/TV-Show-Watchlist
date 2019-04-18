import axios from 'axios';

const port = 9999;


const readAllShows = () => {
    return axios({
        method: 'get',
        url: `http://localhost:${port}/shows/all`,
    });
};

export {
    readAllShows,
}