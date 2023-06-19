import {Table, TableBody, Typography} from "@mui/material";
import {historyHeaderCells} from "../../utils/consts";
import React, {useContext, useState} from "react";
import {TableHeader} from "./TableHeader";
import {grey} from "@mui/material/colors";
import {Context} from "../../index";
import {CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
import {observer} from "mobx-react-lite";
import {useSort} from "../../hooks/useSort";

export const HistoryTable = observer( () => {
    const {trading} = useContext(Context);
    const history = trading.transactions;
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('date');
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        console.log('order:', order, '|by:', orderBy);
    };
    const sorted = useSort([...history], orderBy, order)
    return (
            <Table stickyHeader>
                <TableHeader
                    headerCells={historyHeaderCells}
                    order={order}
                    orderBy={orderBy}
                    handleRequestSort={handleRequestSort}
                    align='left'
                    textVariant='subtitle2'
                    textColor={grey[500]}
                />
                <TableBody>
                    {sorted.map(record =>
                        <CustomTableRow key = {record.id}>
                            {Object.keys(record).map(key =>
                                key !== 'id' ?
                            <CustomTableCell align = 'left'><Typography variant='body2'>{record[key]}</Typography></CustomTableCell>
                                    : ''
                            )}
                        </CustomTableRow>
                    )}
                </TableBody>
            </Table>
    )
})