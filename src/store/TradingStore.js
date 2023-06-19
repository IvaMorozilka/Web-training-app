import {makeAutoObservable} from "mobx";
import {get_coin_list} from "../http/coinAPI";

export default class TradingStore {
    constructor() {
        this._selectedAccount = {id: 2, name: 'BTC/USD', fav: true, amount: 0.00001673};
        this._transactions = [
            {id: 1, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 2, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
        ]
        this._tradingAccounts = [
            {id: 1, name: 'USD', amount: 0,},
            // {id: 2, name: 'BTC/USD', fav: true, amount: 0.00001673},
            // {id: 3, name: 'ETH/USD', fav: false, amount: 0.0023},
            // {id: 4, name: 'XRP/USD', fav: true, amount: 23.223},
            // {id: 5, name: 'SOL/USD', fav: false, amount: 1.083},
        ]
        this._marketData = []

        makeAutoObservable(this);
    }

    get assets(){
        return this._tradingAccounts
            .filter(account => account.name !== 'USD')
            .map(account => {
                const [name] = account.name.split('/');
                const amountUSD = account.amount * parseFloat(account.price);
                return {name, amount: account.amount, amountUSD: String(amountUSD) + " USD"};
            });
    }

    get transactions() {
        return this._transactions;
    }

    get tradingAssets() {
        return this._tradingAccounts.slice(1);
    }
    async updateMarketData(){
        const newData = await get_coin_list();
        if (this._marketData.length !== 0){
            // console.log('newData', newData);
            this._marketData = this._marketData.map((item,index) => ({...item, price: newData[index].price, change: newData[index].change}))
            console.log('PRICES UPDATED!!! != 0 ', this.marketData)
        } else {
            this._marketData = newData;
            console.log('PRICES UPDATED!!! === 0 ', this.marketData)
        }
    }
    get marketData(){
        return this._marketData;
    }
    createTradingAccounts() {
        this._tradingAccounts = this._marketData.map(coin => ({id: coin.id + 2, name: coin.symbol + '/USD', fav: false, amount: 0}))
        this._tradingAccounts.unshift({id: 1, amount: 100000, name: 'USD'})
        console.log('TRADING ACCOUNTS CREATED!!!', this._tradingAccounts);
        console.log('TRADING ACCOUNTS', this._tradingAccounts)
    }
    get selectedAccountCurrency(){
        console.log(this._selectedAccount.name.replace("/USD", ""))
        return this._selectedAccount.name.replace("/USD", "");
    }

    get selectedAccount() {
        return this._selectedAccount;
    }

    get usdAmount() {
        return this._tradingAccounts[0].amount;
    }

    confirmBuy(price, amount, total) {
        alert(`Вы купили ${amount} BTC по цене ${price} на сумму ${total}`);
    }

    confirmSell(price, amount, total) {
        alert(`Вы продали ${amount} BTC по цене ${price} и получили ${total}`);
    }
    isFavorite(id){
        return !!this._marketData.find(asset => asset.id === parseInt(id) && asset.fav === true);
    }
    updateFavById(id, newFav) {
        const asset = this._marketData.find(asset => asset.id === parseInt(id));
        console.log(asset)
        if (asset) {
            asset.fav = newFav;
            return true; // элемент найден и обновлен
        }
        return false; // элемент с заданным идентификатором не найден
    }

    changeSelectedAccountById(id){
        this._selectedAccount  = this._tradingAccounts.find(asset => asset.id === id);
    }

}