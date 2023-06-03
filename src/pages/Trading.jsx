import React from "react";
import {Box, Grid, Stack} from "@mui/material";
import {Trade} from "../components/trading/Trade";

const Trading = () => {
    return (
        <>
            <Box p={2} >
                <Grid container spacing={1} height={900}>
                    <Grid item xs={8}>
                        <Stack spacing={1} height='100%'>
                            <Box sx = {{outline: '1px solid red'}} flexBasis='75%'>1</Box>
                            <Box sx = {{outline: '1px solid red'}} flexBasis='25%'>2</Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={1} height='100%'>
                            <Box sx = {{outline: '1px solid red'}} flexBasis='33%'>
                                <Trade/>
                            </Box>
                            <Box sx = {{outline: '1px solid red'}} flexBasis='67%'>4</Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Trading;
