import {AdvancedRealTimeChart} from "react-ts-tradingview-widgets";
import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export const Chart = observer (() => {
    const {trading} = useContext(Context);
    const currencyName = trading.selectedAccount.currencyName;
    return (
        <AdvancedRealTimeChart
            autosize
            theme='light'
            symbol={`CRYPTO:${currencyName}USD`}
            interval='15'
            timezone='Europe/Moscow'
            locale='ru'
            enable_publishing={false}
        />
    )
});