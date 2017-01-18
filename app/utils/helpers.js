/**
 * Created by amanulchowdhury.
 */

import axios from 'axios';

var baseUrl = 'https://api.github.com';

const getRepos = (username) => {
    return axios.get(`${baseUrl}/users/${username }/repos`);
};

const getUserInfo = (username) => {
    return axios.get(`${baseUrl}/users/${username}`);
};


const getGithubInfo = (username) => {
    return axios.all([
        getRepos(username),
        getUserInfo(username)
    ])
        .then((arr) => ({ repos: arr[0].data, bio: arr[1].data }));
};

export default getGithubInfo;


