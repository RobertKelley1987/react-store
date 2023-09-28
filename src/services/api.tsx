import axios from 'axios';

const productionURL = 'https://infinite-bliss.onrender.com/';

export const api = axios.create({
    baseURL: productionURL
});