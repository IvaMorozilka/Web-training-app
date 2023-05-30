import React from "react";
import {
  FastForward,
  FastRewind,
  Pause,
  PlayArrow,
  SkipNext,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import { Box, Slider, Stack, Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";

const PrettySlider = styled(Slider)(({ theme }) => ({
  "&.MuiSlider-root": {
    padding: "auto",
    margin: "auto",
    height: "5px",
    color: theme.palette.secondary.light,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.secondary.light,
    border: "2px solid currentColor",
    "&:hover": {
      boxShadow: "inherit",
    },
  },
  "&.MuiSlider-valueLabel": {
    left: "calc(-50% - 4px)",
  },
  "& .MuiSlider-track": {
    // height: 5,
    // borderRadius: 4,
    // width: "100%",
    // color: theme.palette.secondary.light
  },
  "& .MuiSlider-rail": {
    // height: 5,
    width: "100%",
    // borderRadius: 4,
    // color: theme.palette.secondary.light
  },
}));

const Control = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: "column",
        zIndex: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/*Heading*/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5px 20px",
        }}
      >
        <Typography variant="h5" color="#fff">
          Video player
        </Typography>
      </Box>
      {/*Middle group*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        '
        <FastRewind
          fontSize="large"
          style={{ color: theme.palette.secondary.main }}
        />
        <Pause
          fontSize="large"
          style={{ color: theme.palette.secondary.main }}
        />
        <FastForward
          fontSize="large"
          style={{ color: theme.palette.secondary.main }}
        />
      </Box>
      {/*Bottom*/}
      <Box mx="25px">
        <Box>
          <Slider color="secondary" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              py: "10px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <PlayArrow fontSize="medium" color="secondary" />
              <SkipNext fontSize="medium" color="secondary" />
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center">
              <VolumeDown fontSize="medium" color="secondary" />
              <Slider size="small" sx={{ width: "100px" }} color="secondary" />
              <VolumeUp fontSize="medium" color="secondary" />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Control;