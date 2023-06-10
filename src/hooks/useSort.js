import {useMemo} from "react";

export const useSort = (data, isFav, orderBy, order, searchQuery) => {
    const sort = useMemo(() => {
        // const data = isFav ? [...assetsData.filter(asset => asset.fav === true)] : [...assetsData];
        switch (orderBy) {
            case 'pair':
                return data.sort((a, b) => {
                    if (order === 'asc')
                        return a.name.localeCompare(b.name)
                    else
                        return b.name.localeCompare(a.name)
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
    }, [order, orderBy, isFav]);
    const searchedAndSorted = useMemo(() => {
        return sort.filter(data => data.name.toUpperCase().includes(searchQuery));
    }, [searchQuery, sort]);

    return searchedAndSorted;
}