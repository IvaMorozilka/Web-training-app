import React from "react";
import {Box, Grid, Slider, Stack} from "@mui/material";
import {Trade} from "../components/trading/Trade";
import styled from "@emotion/styled";
import {grey} from "@mui/material/colors";

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
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='75%'>1</RoundBox>
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='25%'>2</RoundBox>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={1} height='100%'>
                            <RoundBox sx = {{outline: `1px solid ${grey[500]}`}}  flexBasis='content'>
                                <Trade/>
                            </RoundBox>
                            <RoundBox sx = {{outline: '1px solid red'}} flex={1}>12
                            </RoundBox>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Trading;
