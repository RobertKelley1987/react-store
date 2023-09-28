import axios from 'axios';

const productionURL = 'https://react-store-lyje.onrender.com/';

export const api = axios.create({
    baseURL: productionURL, 
    withCredentials: true
});