const axios = require('axios');
const https = require('https')

const $crm_host = axios.create({
    baseURL: 'https://localhost:7097',
})
const register = async (regdata) => {
    const response = await $crm_host.post('/Leads', regdata).catch((error) => console.log(error))
    return response;
}
const regData = {
    "email": "mail@mail.ru",
    "login": "123",
    "password": "11111111",
    "firstName": "22",
    "lastName": "22",
    "patronymic": "22",
    "phone": "71231231231",
    "birthday": "2001-06-11T20:00:00.000Z"
}

const resp = register(regData)