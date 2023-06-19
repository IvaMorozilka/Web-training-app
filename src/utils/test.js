const axios = require('axios');
const https = require('https')

const $coin_api = axios.create({
    baseURL: 'https://api.coincap.io/v2',
    headers: {'Authorization': 'Bearer 8bc3efda-b055-402e-ad3e-b10b6692adea'}
})

$coin_api.get('/assets', {params: {limit: 25}}).then(response => {
    const btc = response.data.data;
    console.log('BTC:', btc)
})
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// const $crm_host = axios.create({
//     baseURL: 'https://localhost:7097',
//
// })

// const register = async (regdata) => {
//     const response = await $crm_host.post('/Leads', regdata).catch((error) => console.log(error))
//     return response;
// }
// const regData = {
//     "email": "mail@mail.ru",
//     "login": "123",
//     "password": "11111111",
//     "firstName": "22",
//     "lastName": "22",
//     "patronymic": "22",
//     "phone": "71231231231",
//     "birthday": "2001-06-11T20:00:00.000Z"
// }
//
// const resp = register(regData)