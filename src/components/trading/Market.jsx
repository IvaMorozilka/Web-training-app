 import {
    Box,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableHead,
    TableSortLabel,
    Typography
} from "@mui/material";
import {CustomTextField} from "../../ui/CustomTextField";
import {Search} from "@mui/icons-material";
import React, {useContext, useMemo, useState} from "react";
import {grey} from "@mui/material/colors";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Cryptocurrencies} from "./Cryptocurrencies";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
 import {CustomChip, CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
 import {marketHeaderCells} from "../../utils/consts";
 import {TableHeader} from "./TableHeader";
 import {useSort} from "../../hooks/useSort";

export const Market = observer(() => {
    const {trading} = useContext(Context);
    const assetsData = trading.tradingAssets;
    const [isFav, setIsFav] = useState(false);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('pair');
    const [searchQuery, setSearchQuery] = useState('');

    const handleChipClick = (e) => {
        if (e.target.textContent === 'Все') {
            setIsFav(false);
        } else {
            setIsFav(true);
        }
    }
    const handleSearchChange = (e) => {
        console.log(e.target.value);
        if (/[a-zA-Z]+/.test(e.target.value) || e.target.value.length === 0) {
            setSearchQuery(e.target.value.toUpperCase());
        }
    }

    const sortResult = useSort(
        isFav ? [...assetsData.filter(asset => asset.fav === true)] : [...assetsData],
        isFav,
        orderBy,
        order,
        searchQuery
    )


    // const sort = useMemo(() => {
    //     const data = isFav ? [...assetsData.filter(asset => asset.fav === true)] : [...assetsData];
    //     switch (orderBy) {
    //         case 'pair':
    //             return data.sort((a, b) => {
    //                 if (order === 'asc')
    //                     return a.name.localeCompare(b.name)
    //                 else
    //                     return b.name.localeCompare(a.name)
    //             })
    //         case 'price':
    //             return data.sort((a, b) => {
    //                 if (order === 'asc')
    //                     return parseFloat(a.price) - parseFloat(b.price)
    //                 else
    //                     return parseFloat(b.price) - parseFloat(a.price)
    //             })
    //         case 'change':
    //             return data.sort((a, b) => {
    //                 if (order === 'asc')
    //                     return parseFloat(a.change) - parseFloat(b.change)
    //                 else
    //                     return parseFloat(b.change) - parseFloat(a.change)
    //             })
    //         default:
    //             return data;
    //     }
    // }, [order, orderBy, isFav]);
    // const searchedAndSorted = useMemo(() => {
    //     console.log(sort);
    //     return sort.filter(data => data.name.toUpperCase().includes(searchQuery));
    // }, [searchQuery, sort]);


    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log('order:', order, '|by:', orderBy);
    };

    return (
        <Box width='100%' height='100%'>
            <Typography variant='subtitle1' fontWeight='600'>Рынки</Typography>
            <CustomTextField fullWidth height='34px' value={searchQuery} textAlign="start" placeholder="Поиск"
                             InputProps={{
                                 startAdornment: (
                                     <InputAdornment position="start"><Search/></InputAdornment>
                                 ),
                             }}
                             onChange={handleSearchChange}
            />
            <Stack direction='row' mt={0.5}>
                <CustomChip label='Все' size='small' clickable onClick={handleChipClick}
                            variant={isFav ? 'outlined'  : 'filled'}/>
                <CustomChip label='Избранное' size='small' clickable onClick={handleChipClick}
                            variant={isFav ? 'filled' : 'outlined'}/>
            </Stack>
            <Table size='small'>
                <TableHeader
                    headerCells={marketHeaderCells}
                    orderBy={orderBy}
                    order={order}
                    handleRequestSort={handleRequestSort}
                    flexDirection={'row-reverse'}
                />
                <TableBody>
                    {sortResult.length === 0
                        ? <CustomTableRow align='center'>
                            <CustomTableCell colSpan={3} sx = {{py: '128px'}}>
                                <Stack direction='column' alignItems='center' spacing={2} sx = {{outline: '1px solid blue'}}>
                                    <DescriptionOutlinedIcon sx = {{fontSize: '64px', fill: `${grey[500]}`}}/>
                                    <Typography variant='subtitle2' color={grey[500]}>Ничего не найдено</Typography>
                                </Stack>
                            </CustomTableCell>
                        </CustomTableRow>
                        :
                        <Cryptocurrencies data={sortResult}/>
                    }
                </TableBody>
            </Table>
        </Box>
    )
});