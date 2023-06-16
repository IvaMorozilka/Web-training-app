import {$crm_host} from "./index";

export const register = async (regdata) => {
    const response = await $crm_host.post('/Leads', regdata)
        .then(resp =>  console.log(resp))
        .catch(error => console.log(error))
    return response;
}

