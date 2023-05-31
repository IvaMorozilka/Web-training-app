import React from "react";
import ReactPlayer from "react-player";
import cl from "./ResponsivePlayer.module.css";
import {Box, Typography} from "@mui/material";
import {ErrorOutline} from "@mui/icons-material";

const ResponsivePlayer = ({ url }) => {
  return (
    <div className={cl.playerWrapper}>
      <Box display='flex'  flexDirection='column' alignItems='center' gap = '20px' sx = {{position: 'absolute', top: '25%'}}>
          <ErrorOutline sx ={{color: 'white', fontSize: '128px'}}/>
          <Typography variant='h2' color="white" align="center" >
              Ошибка при загрузке видео, или урок не выбран.
          </Typography>
      </Box>

      <ReactPlayer
        className={cl.reactPlayer}
        url={url}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ResponsivePlayer;