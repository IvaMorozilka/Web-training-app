import axios from "axios";

const url = axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=U6ZCT8SWLJ8CF1JM')
    .then(function (response) {
    // обработка успешного запроса
    console.log(response);
    })
    .catch(function (error) {
        // обработка ошибки
        console.log(error);
    })
    .finally(function () {
        // выполняется всегда
    });


// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=demo';


// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
// }, (err, res, data) => {
//     if (err) {
//         console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//         console.log('Status:', res.statusCode);
//     } else {
//         // data is successfully parsed as a JSON object:
//         console.log(data);
//     }
// });