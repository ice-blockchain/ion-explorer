import {ION_ANALYTICS_ENDPOINT} from '~/config.js';
import axios from 'axios';

const http = axios.create({
    baseURL: ION_ANALYTICS_ENDPOINT,
});

export const getOverview = async function (address) {

    const response = await http.get('overview');
    return response.data;
};
