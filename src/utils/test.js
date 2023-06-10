const tradingAccounts = [
    {id: 1, name: 'USD', amount: 2000,},
    {id: 2, name: 'BTC/USD', price: '27234.1', change: '2.3', fav: true, amount: 0.00001673},
    {id: 3, name: 'ETH/USD', price: '2129.22', change: '-1.3', fav: false, amount: 0.0023},
    {id: 4, name: 'XRP/USD', price: '0.3422', change: '11', fav: true, amount: 23.223},
    {id: 5, name: 'SOL/USD', price: '22.342', change: '0', fav: false, amount: 1.083},
]


const newTradingAccounts = tradingAccounts
    .filter(account => account.name !== 'USD')
    .map(account => {
        const [name] = account.name.split('/');
        const amountUSD = account.amount * parseFloat(account.price);
        return {name, amount: account.amount, amountUSD};
    });

console.log(newTradingAccounts)