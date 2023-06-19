import {Box, Stack, Typography, useTheme} from "@mui/material";
import {StarBorderRounded, StarRounded} from "@mui/icons-material";
import {changeColorPicker, formatPercentage} from "../../utils/helpers";
import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {CustomTableCell, CustomTableRow} from "../../ui/StyledComponents";

export const Cryptocurrencies = observer(({data, ...props}) => {
    const theme = useTheme();
    const {trading} = useContext(Context);

    const handleFavClick = (e) => {
        console.log(e.target.id);
        if (trading.isFavorite(e.target.id)) {
            console.log('yes')
            trading.updateFavById(e.target.id,false);
        } else {
            console.log('nope')
            trading.updateFavById(e.target.id,true);
        }
    }

    return (
        <>
            {data.map((asset, index) =>
            <CustomTableRow hover selected={asset.id + 2 === trading.selectedAccount.id}  onClick = {(e) => e.target.id || trading.changeSelectedAccountById(asset.id+2)} key = {asset.id} sx = {{cursor: 'pointer'}}>
                <CustomTableCell align='left' key = {asset.id}>
                    <Stack direction='row' alignItems='center' spacing={1}>
                        <Box sx = {{cursor: 'pointer'}} onClick = {handleFavClick} key={asset.id} id = {asset.id}>
                            {asset.fav ?
                                <StarRounded color='primary' sx={{fontSize: '28px'}} children={'hello'}/>
                                :
                                <StarBorderRounded color='primary' sx={{fontSize: '28px'}}/>
                            }
                        </Box>
                        <Typography variant='subtitle1'>
                            {asset.symbol}
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
});