import {makeAutoObservable} from "mobx";

export default class TradingStore {
    constructor() {
        makeAutoObservable(this);
        this._tradingAccounts = [
            {currencyId: 1, currencyName: 'USD', currencyAmount: 2714.1,},
            {currencyId: 2, currencyName: 'BTC', currencyAmount: 0.0000025,},
        ];
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

}