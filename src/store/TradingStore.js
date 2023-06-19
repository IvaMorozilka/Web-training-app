import {makeAutoObservable} from "mobx";
import {get_coin_list} from "../http/coinAPI";
import {currentDateTime, formatSum, formatValue, getLastId, isEmptyArray} from "../utils/helpers";

export default class TradingStore {
    constructor() {
        this._selectedAccount = {id: 2, name: 'BTC/USD', fav: true, amount: 0};
        this._transactions = []
        this._tradingAccounts = [
            {id: 1, name: 'USD', amount: 0,},
            ///amount: 0
            // fav: false
            // id: 2
            // name: "BTC/USD"
        ]
        this._marketData = []
        //change: "-0.05"
        // id: 0
        // price: "26522.829"
        // symbol: "BTC"

        makeAutoObservable(this);
    }
    getPriceBySymbol(symbol) {
        return this.marketData.find(asset => asset.symbol === symbol).price;
    }

    get assets() {
        return this._tradingAccounts
            .filter(account => account.name !== 'USD')
            .map(account => {
                const [symbol] = account.name.split('/');
                const amountUSD = account.amount * this.getPriceBySymbol(symbol);
                return {symbol, amount: account.amount, amountUSD: amountUSD.toFixed(2) };
            });
    }

    get transactions() {
        return this._transactions;
    }

    get tradingAssets() {
        return this._tradingAccounts.slice(1);
    }

    get marketData() {
        return this._marketData;
    }

    get selectedAccountCurrency() {
        const [name] = this._selectedAccount.name.split('/');
        return name;
    }

    get selectedAccount() {
        return this._selectedAccount;
    }
    get selectedAccountAmount() {
        return this._selectedAccount.amount;
    }
    get usdAmount() {
        return this._tradingAccounts[0].amount.toFixed(2);
    }

    getSelectedAccountCurrentPrice() {
        const [symbol] = this._selectedAccount.name.split('/');
        const result = this._marketData.find(item => item.symbol.includes(symbol));
        if (isEmptyArray(this._marketData)) return 0;
        if (result)
            return result.price;
        else
            return 0;
    }

    async updateMarketData() {
        const newData = await get_coin_list();
        if (this._marketData.length !== 0) {
            // console.log('newData', newData);
            this._marketData = this._marketData.map((item, index) => ({
                ...item,
                price: newData[index].price,
                change: newData[index].change
            }))
            console.log('PRICES UPDATED!!! != 0 ', this.marketData)
        } else {
            this._marketData = newData;
            console.log('PRICES UPDATED!!! === 0 ', this.marketData)
        }
    }

    createTradingAccounts() {
        this._tradingAccounts = this._marketData.map(coin => ({
            id: coin.id + 2,
            name: coin.symbol + '/USD',
            fav: false,
            amount: 0
        }))
        this._tradingAccounts.unshift({id: 1, amount: 100000, name: 'USD'})
        console.log('TRADING ACCOUNTS CREATED!!!', this._tradingAccounts);
        console.log('TRADING ACCOUNTS', this._tradingAccounts)
    }


    confirmBuy(price, amount, total) {
        const f_price = parseFloat(price);
        const f_amount = parseFloat(amount);
        const f_total = parseFloat(total);
        if (this.usdAmount < 0.01){
            alert(`Ваш баланс слишком мал для совершения покупки.`);
            return;
        }
        alert(`Вы купили ${amount} ${this.selectedAccountCurrency} по цене ${price} на сумму ${total} USD`);
        this._transactions.push({id: getLastId(this.transactions) + 1, symbol: this.selectedAccountCurrency, datetime: currentDateTime(), type: 'Покупка', amount: f_amount, price: f_price})
        this._tradingAccounts.find(account => account.id === 1).amount -= f_total;
        this._tradingAccounts.find(account => account.id === this.selectedAccount.id).amount += f_amount;
        this._selectedAccount = this._tradingAccounts.find(account => account.id === this.selectedAccount.id);
    }

    confirmSell(price, amount, total) {
        const f_price = parseFloat(price);
        const f_amount = parseFloat(amount);
        const f_total = parseFloat(total);
        if (this.selectedAccountAmount === 0){
            alert(`Вы имеете нулевой баланс для продажи.`);
            return;
        }
        alert(`Вы продали ${amount} ${this.selectedAccountCurrency} по цене ${price} и получили ${total}`);
        this._transactions.push({id: getLastId(this.transactions) + 1, symbol: this.selectedAccountCurrency, datetime: currentDateTime(), type: 'Продажа', amount: f_amount, price: f_price})
        this._tradingAccounts.find(account => account.id === 1).amount += f_total;
        this._tradingAccounts.find(account => account.id === this.selectedAccount.id).amount -= f_amount;
        this._selectedAccount = this._tradingAccounts.find(account => account.id === this.selectedAccount.id);
    }

    isFavorite(id) {
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

    changeSelectedAccountById(id) {
        this._selectedAccount = this._tradingAccounts.find(asset => asset.id === id);
    }

}