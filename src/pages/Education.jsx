import React, {memo} from "react";
import {Box, Grid, Paper, Stack} from "@mui/material";
import ResponsivePlayer from "../components/player/ResponsivePlayer";
import LessonSelector from "../components/education/LessonSelector";
import {DescriptionBlock} from "../components/education/DescriptionBlock";

const Education = memo(() => {
  return (
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item sm={12} md = {4}>
            <LessonSelector/>
          </Grid>
          <Grid item sm={12} md = {8}>
            <Stack>
                <ResponsivePlayer/>
                <DescriptionBlock/>
            </Stack>
          </Grid>
        </Grid>
      </Box>
  );
});

export default Education;
