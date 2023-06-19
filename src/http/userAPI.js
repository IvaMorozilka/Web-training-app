import {$crm_host} from "./index";

export const register = async (regdata) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const response = await $crm_host.post('/Leads', regdata)
        .then(resp =>  console.log(resp))
        .catch(error => console.log(error))
    return response;
}

