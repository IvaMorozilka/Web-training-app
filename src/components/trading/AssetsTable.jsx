import React, {useContext, useEffect, useState} from 'react';
import {TableHeader} from "./TableHeader";
import {assetsHeaderCells} from "../../utils/consts";
import {grey} from "@mui/material/colors";
import {Table, TableBody, Typography} from "@mui/material";
import {CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useSort} from "../../hooks/useSort";

const AssetsTable = observer (() => {
    const {trading} = useContext(Context);
    const [assets, setAssets] = useState(trading.assets);
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('amountUSD');
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log('order:', order, '|by:', orderBy);
    };
    useEffect(() => {
        setAssets(trading.assets.map(obj => ({...obj, amountUSD: (obj.amount * trading.getPriceBySymbol(obj.symbol)).toFixed(2)})))
    }, [trading.marketData, trading.transactions])

    const sorted = useSort([...assets], orderBy, order);

    return (
        <Table stickyHeader sx = {{tableLayout: 'fixed', width: '100%'}}>
            <TableHeader
                headerCells={assetsHeaderCells}
                order={order}
                orderBy={orderBy}
                handleRequestSort={handleRequestSort}
                align='left'
                textVariant='subtitle2'
                textColor={grey[500]}
            />
            <TableBody>
                {sorted.map(record =>
                    <CustomTableRow>
                        {Object.keys(record).map(key =>
                            key !== 'id' ?
                                <CustomTableCell align = 'left'><Typography variant='body2'>{record[key]}</Typography></CustomTableCell>
                                : ''
                        )}
                    </CustomTableRow>
                )}
            </TableBody>
        </Table>
    );
});

export default AssetsTable;