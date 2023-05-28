import React from 'react';
import bitcoin from "../assets/bitcoin.svg";
import {Box, Container, Grid} from "@mui/material";
import BackgroundWrapper from "../components/BackgroundWrapper";


const Landing = () => {
    return (
        <Container maxWidth='xl' sx={{my: '100px'}}>
            <Grid container spacing={2} alignItems='center' justifyContent='center'>
                <Grid item xl={6} className="landing-text" sx={{textAlign: {xs: 'center', xl: 'left'}}}>От новичка до
                    профи: освой <span
                        className="crypto-trading-text">крипто трейдинг</span> с
                    нашей
                    платформой!
                </Grid>
                <Grid item xl={6} display='flex' justifyContent='center'>
                    <Box component='img'
                         sx={{width: '350px', height: '350px'}}
                         src={bitcoin}
                         alt="Bitcoin">
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Landing;