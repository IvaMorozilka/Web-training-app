import React, {useContext, useState} from 'react';
import {TableHeader} from "./TableHeader";
import {assetsHeaderCells, historyHeaderCells} from "../../utils/consts";
import {grey} from "@mui/material/colors";
import {Table, TableBody, Typography} from "@mui/material";
import {CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
import {Context} from "../../index";

const AssetsTable = () => {
    const {trading} = useContext(Context);
    const assets = trading.assets;
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('pair');
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log('order:', order, '|by:', orderBy);
    };
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
                {assets.map(record =>
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
};

export default AssetsTable;