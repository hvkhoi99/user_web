import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/api/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}

// `${Config.API_URL}/${endpoint}`