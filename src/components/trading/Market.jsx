import {
    Box,
    Chip,
    InputAdornment,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";
import {CustomTextField} from "../../ui/CustomTextField";
import {Search, StarBorderRounded, StarRounded} from "@mui/icons-material";
import React, {useContext} from "react";
import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";
import {Context} from "../../index";
import {changeColorPicker, formatPercentage} from "../../utils/helpers";
import {observer} from "mobx-react-lite";

const CustomChip = styled(Chip)(({theme}) => ({
    fontWeight: 500,
    border: '1px solid #fff',
    "&.MuiChip-outlined": {
        color: `${grey[500]}`,
    }
}))
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

export const Market = observer(() => {
    const {trading} = useContext(Context);
    const theme = useTheme();
    return (
        <Box width='100%' height='100%'>
            <Typography variant='subtitle1' fontWeight='600'>Рынки</Typography>
            <CustomTextField fullWidth height='34px' textAlign="start" placeholder="Поиск" InputProps={{
                startAdornment: (
                    <InputAdornment position="start"><Search/></InputAdornment>
                ),
            }}/>
            <Stack direction='row' mt={0.5}>
                <CustomChip label='Все' size='small' clickable/>
                <CustomChip label='Избранное' variant='outlined' size='small' clickable/>
            </Stack>
            <Table size='small'>
                <TableHead sx={{}}>
                    <CustomTableRow>
                        <CustomTableCell align='left'>Пара</CustomTableCell>
                        <CustomTableCell align='right'>Последняя цена</CustomTableCell>
                        <CustomTableCell align='right'>Изм. (24ч)</CustomTableCell>
                    </CustomTableRow>
                </TableHead>
                <TableBody>
                    {trading.tradingAssets.map((asset, index) =>
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
                </TableBody>
            </Table>
        </Box>
    )
});