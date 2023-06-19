import React, {useContext} from "react";
import {Box, Button, Grid, Paper, Stack} from "@mui/material";
import {Trade} from "../components/trading/Trade";
import styled from "@emotion/styled";
import {Market} from "../components/trading/Market";
import {Chart} from "../components/trading/Chart";
import {Info} from "../components/trading/Info";
import {get_coin_list} from "../http/coinAPI";
import {Context} from "../index";

const RoundBox = styled(Box)(({theme}) => ({
    borderRadius: '16px',
}));

const Trading = () => {
    const {trading} = useContext(Context);
    const handleClick = async() => {
        await trading.updateMarketData()
    }
    return (
        <Box p={1} height={'auto'}>
            <Grid container spacing={1} height={'100%'}>
                <Grid item xs={8}>
                    <Stack spacing={1} height={'100%'}>
                        <RoundBox flexBasis='75%' component={Paper} elevation={4}>
                            <Chart/>
                        </RoundBox>
                        <RoundBox display='flex' flexBasis='25%' component={Paper}
                                  elevation={4}>
                            <Info/>
                        </RoundBox>
                    </Stack>
                </Grid>
                <Grid item xs={4} flexDirection={'column'} display={'flex'}>
                    <Stack spacing={1} flex={1}>
                        <RoundBox flexBasis='content' component={Paper} elevation={4} >
                            <Trade/>
                        </RoundBox>
                        <RoundBox p={1} flex={1} component={Paper} elevation={4}>
                            <Market/>
                        </RoundBox>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Trading;
