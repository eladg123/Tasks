import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
    baseURL: 'http://192.168.14.199:8000/',

});

export default APIKit;