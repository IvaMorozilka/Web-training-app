import React from "react";
import {Box, Grid, Paper, Slider, Stack} from "@mui/material";
import {Trade} from "../components/trading/Trade";
import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";
import {Market} from "../components/trading/Market";

const RoundBox = styled(Box)(({theme}) => ({
    borderRadius: '16px',
}));

const Trading = () => {
    return (
        <>
            <Box p={1} >
                <Grid container spacing={1} height={900}>
                    <Grid item xs={8}>
                        <Stack spacing={1} height='100%'>
                            <RoundBox flexBasis='75%' component = {Paper} elevation = {4}>1</RoundBox>
                            <RoundBox flexBasis='25%' component = {Paper} elevation = {4}>2</RoundBox>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={1} height='100%'>
                            <RoundBox  flexBasis='content' component = {Paper} elevation = {4}>
                                <Trade/>
                            </RoundBox>
                            <RoundBox  flex={1} p = {1} component = {Paper} elevation = {4}>
                                <Market/>
                            </RoundBox>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Trading;
