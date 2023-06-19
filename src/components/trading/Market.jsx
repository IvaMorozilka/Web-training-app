 import {
    Box,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    Typography
} from "@mui/material";
import {CustomTextField} from "../../ui/CustomTextField";
import {Search} from "@mui/icons-material";
import React, {useContext, useEffect, useState} from "react";
import {grey} from "@mui/material/colors";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {Cryptocurrencies} from "./Cryptocurrencies";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
 import {CustomChip, CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
 import {marketHeaderCells} from "../../utils/consts";
 import {TableHeader} from "./TableHeader";
 import {useSortAndSearch} from "../../hooks/useSortAndSearch";

export const Market = observer(() => {
    const {trading} = useContext(Context);
    const marketData = trading.marketData;
    const [isFav, setIsFav] = useState(false);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('symbol');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // const intervalId = setInterval(() => trading.updateMarketData(), 5000);
        // return () => clearInterval(intervalId);
    }, [])

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

    const sortResult = useSortAndSearch(
        isFav ? [...marketData.filter(asset => asset.fav === true)] : [...marketData],
        isFav,
        orderBy,
        order,
        searchQuery
    )

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log('order:', order, '|by:', orderBy);
    };

    return (
        <Box>
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
            <Box sx = {{overflowY: 'scroll'}} height={'436px'}>
                <Table size='small' stickyHeader>
                    <TableHeader
                        headerCells={marketHeaderCells}
                        orderBy={orderBy}
                        order={order}
                        handleRequestSort={handleRequestSort}
                        flexDirection={'row-reverse'}
                        fontSize={{md: '0.8rem', lg: '1rem'}}
                    />
                    <TableBody>
                        {sortResult.length === 0
                            ? <CustomTableRow align='center'>
                                <CustomTableCell colSpan={3} sx = {{py: '128px'}}>
                                    <Stack direction='column' alignItems='center' spacing={2}>
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
        </Box>
    )
});