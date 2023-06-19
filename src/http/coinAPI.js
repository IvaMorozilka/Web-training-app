import axios from "axios";
import {formatValue} from "../utils/helpers";
const $coin_api = axios.create({
    baseURL: 'https://api.coincap.io/v2',
    headers: {'Authorization': 'Bearer 8bc3efda-b055-402e-ad3e-b10b6692adea'}
})

export const get_coin_list = async () => {
    try {
        const response = await $coin_api.get('assets', {
            params: {
                'limit':25,
            }
        })
        const coin_list = response.data.data;
        return coin_list.map(({ changePercent24Hr, priceUsd, symbol }, index) => ({ id: index, change: parseFloat(changePercent24Hr).toFixed(2), price: formatValue(priceUsd), symbol}));
    }
    catch (e) {
        alert('Произошла ошибка при запросе API: coin_api, код ошибки в консоли.')
        console.log(e)
    }
}
