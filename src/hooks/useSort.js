import {useMemo} from "react";

export const useSort = (data, orderBy, order) => {
    console.log('sorted')
    const sort = useMemo(() => {
        switch (orderBy) {
            case 'symbol':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return a.symbol.localeCompare(b.symbol)
                    else
                        return b.symbol.localeCompare(a.symbol)
                })
            case 'date':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return new Date(a.date).getTime() - new Date(b.date).getTime()
                    else
                        return new Date(b.date).getTime() - new Date(a.date).getTime()
                })
            case 'amount':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return parseFloat(a.amount) - parseFloat(b.amount)
                    else
                        return parseFloat(b.amount) - parseFloat(a.amount)
                })
            case 'price':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return parseFloat(a.price) - parseFloat(b.price)
                    else
                        return parseFloat(b.price) - parseFloat(a.price)
                })
            case 'amountUSD':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return parseFloat(a.amountUSD) - parseFloat(b.amountUSD)
                    else
                        return parseFloat(b.amountUSD) - parseFloat(a.amountUSD)
                })
            default:
                return data;
        }
    }, [data ,order, orderBy]);

    return sort;
}