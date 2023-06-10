import {makeAutoObservable} from "mobx";

export default class TradingStore {
    constructor() {
        this._selectedAccount = {id: 2, name: 'BTC/USD', price: '27234.1', change: '2.3', fav: true, amount: 0.00001673};
        this._transactions = [
            {id: 1, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 2, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
            {id: 3, currency: 'BTC',  datetime: '08.06.2023 22:25:21', type: 'покупка', amount: '0.00030210', price: '25000'},
        ]
        this._tradingAccounts = [
            {id: 1, name: 'USD', amount: 2000,},
            {id: 2, name: 'BTC/USD', price: '27234.1', change: '2.3', fav: true, amount: 0.00001673},
            {id: 3, name: 'ETH/USD', price: '2129.22', change: '-1.3', fav: false, amount: 0.0023},
            {id: 4, name: 'XRP/USD', price: '0.3422', change: '11', fav: true, amount: 23.223},
            {id: 5, name: 'SOL/USD', price: '22.342', change: '0', fav: false, amount: 1.083},
        ]
        this._prices = [
            {'BTCUSD': 23000},
            {'ETHUSD': 1800.32},
            {'LTCUSD': 88.01},
        ]
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
        return !!this._tradingAccounts.find(asset => asset.id === parseInt(id) && asset.fav === true);
    }
    updateFavById(id, newFav) {
        const asset = this._tradingAccounts.find(asset => asset.id === parseInt(id));
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