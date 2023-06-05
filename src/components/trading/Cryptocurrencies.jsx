import {Stack, TableCell, TableRow, Typography, useTheme} from "@mui/material";
import {StarBorderRounded, StarRounded} from "@mui/icons-material";
import {changeColorPicker, formatPercentage} from "../../utils/helpers";
import React from "react";
import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";

const CustomTableCell = styled(TableCell)(({theme}) => ({
    "&.MuiTableCell-root": {
        border: 'none',
        fontWeight: 500,
        fontSize: '13pt',
        paddingLeft: 0,
    },
}))
const CustomTableRow = styled(TableRow)(({theme}) => ({
    "&.MuiTableRow-hover": {
        "&:hover": {
            backgroundColor: `${grey[100]}`
        },
    },
    "&.Mui-selected": {
        backgroundColor: `${grey[100]}`
    },
}))


export const Cryptocurrencies = ({data, ...props}) => {
    const theme = useTheme();
    return (
        <>
            {data.map((asset, index) =>
            <CustomTableRow hover selected={asset.name === 'BTC'}>
                <CustomTableCell align='left'>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        {asset.fav ?
                            <StarRounded color='primary' sx={{fontSize: '28px', cursor: 'pointer'}}/>
                            :
                            <StarBorderRounded color='primary' sx={{fontSize: '28px', cursor: 'pointer'}}/>
                        }
                        <Typography variant='subtitle1'>
                            {asset.name + '/USD'}
                        </Typography>
                    </Stack>
                </CustomTableCell>
                <CustomTableCell align='right'>
                    <Typography variant='subtitle1'>
                        {asset.price}
                    </Typography>
                </CustomTableCell>
                <CustomTableCell align='right'>
                    <Typography variant='subtitle1' fontWeight='600'
                                color={changeColorPicker(asset.change, theme)}>
                        {formatPercentage(asset.change)}
                    </Typography>
                </CustomTableCell>
            </CustomTableRow>
        )}
        </>
    )
}