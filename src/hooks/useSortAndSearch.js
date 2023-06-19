import {useMemo} from "react";

export const useSortAndSearch = (data, isFav, orderBy, order, searchQuery) => {
    const sort = useMemo(() => {
        //const data = isFav ? [...assetsData.filter(asset => asset.fav === true)] : [...assetsData];
        switch (orderBy) {
            case 'symbol':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return a.symbol.localeCompare(b.symbol)
                    else
                        return b.symbol.localeCompare(a.symbol)
                })
            case 'price':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return parseFloat(a.price) - parseFloat(b.price)
                    else
                        return parseFloat(b.price) - parseFloat(a.price)
                })
            case 'change':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return parseFloat(a.change) - parseFloat(b.change)
                    else
                        return parseFloat(b.change) - parseFloat(a.change)
                })
            default:
                return data;
        }
    }, [data ,order, orderBy, isFav]);
    const searchedAndSorted = useMemo(() => {
        return sort.filter(data => data.symbol.toUpperCase().includes(searchQuery));
    }, [searchQuery, sort]);

    return searchedAndSorted;
}