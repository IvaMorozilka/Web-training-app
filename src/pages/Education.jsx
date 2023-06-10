import React from "react";
import {Box, Grid, Stack} from "@mui/material";
import ResponsivePlayer from "../components/player/ResponsivePlayer";
import LessonSelector from "../components/education/LessonSelector";
import {DescriptionBlock} from "../components/education/DescriptionBlock";

const Education = () => {
    return (
        <Grid columns={3}
              container
              minHeight={'calc(100vh - 108px)'}
              spacing={{xs: 1, lg: 2}}
              direction={{ sm: 'row-reverse' ,md: 'row',lg: 'row'}}
               p={{xs: 1, sm: 1, lg: 2}}

        >
            <Grid item  sm = {3} lg = {2}>
                <Stack spacing={{xs: 1, lg: 2}}>
                    <ResponsivePlayer/>
                    <DescriptionBlock/>
                </Stack>
            </Grid>
            <Grid item sm = {3} lg = {1}>
                <LessonSelector/>
            </Grid>
        </Grid>
    );
}

export default Education;
//minHeight={'calc(100vh - 108px)'}
// item xs={12} sm = {12} md={4}