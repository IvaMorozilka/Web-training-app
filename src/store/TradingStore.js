import {makeAutoObservable} from "mobx";

export default class TradingStore {
    constructor() {
        makeAutoObservable(this);
        this._tradingAccounts = [
            {currencyId: 1, currencyName: 'USD', currencyAmount: 2000,},
            {currencyId: 2, currencyName: 'BTC', currencyAmount: 0.123431, exchangeRate: 26003.2},
        ];
        this._selectedAccount = {currencyId: 2, currencyName: 'BTC', currencyAmount: 0.030234, exchangeRate: 26003.2};
        this._operationsHistory = []
        this._tradingAssets = [
            {id: 2, name: 'BTC', price: '27234.1', change: '2.3', fav: true},
            {id: 3, name: 'ETH', price: '2129.22', change: '-1.3', fav: false},
            {id: 4, name: 'XRP', price: '0.3422', change: '11', fav: true},
            {id: 5, name: 'SOL', price: '22.342', change: '0', fav: false},
        ]
    }

    get tradingAssets() {
        return this._tradingAssets;
    }

    get selectedAccount() {
        return this._selectedAccount;
    }

    get usdAmount() {
        return this._tradingAccounts[0].currencyAmount;
    }

    get TradeGroup() {
        return this._TradeGroup;
    }

    set TradeGroup(value) {
        this._TradeGroup = value;
    }

    confirmBuy(price, amount, total) {
        alert(`Вы купили ${amount} BTC по цене ${price} на сумму ${total}`);
    }

    confirmSell(price, amount, total) {
        alert(`Вы продали ${amount} BTC по цене ${price} и получили ${total}`);
    }

}