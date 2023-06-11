import {CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";
import {TableHead, TableSortLabel, Typography} from "@mui/material";
import React from "react";

export const TableHeader = ({headerCells, orderBy, order, handleRequestSort, align, flexDirection, textVariant, textColor, fontSize}) => {
    return (
        <TableHead>
            <CustomTableRow>
                {headerCells.map(headCell =>
                    <CustomTableCell
                        sortDirection={orderBy === headCell.id ? order : false}
                        key={headCell.id}
                        align={align}
                        sx = {{py: 1}}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            sx={{flexDirection: `${flexDirection}`}}
                            onClick={() => handleRequestSort(headCell.id)}
                        >
                            <Typography variant={textVariant} color={textColor} fontSize={fontSize} textAlign={'center'}>{headCell.label}</Typography>
                        </TableSortLabel>
                    </CustomTableCell>
                )}
            </CustomTableRow>
        </TableHead>
    )
}