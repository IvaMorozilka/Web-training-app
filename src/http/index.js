import axios from "axios";
const https = require('https')

// import {Agent} from "https";
// const agent = new Agent({
//     rejectUnauthorized: false,
// })
export const $crm_host = axios.create({
    baseURL: 'https://localhost:7097',
})