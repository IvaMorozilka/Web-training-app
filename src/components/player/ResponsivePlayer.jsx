import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import cl from "./ResponsivePlayer.module.css";
import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ResponsivePlayer = observer(() => {
  const { education } = useContext(Context);
  const id = education.lastHistory(-1).id;
  const url = education.lastHistory(0).url;
  const ref = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    education.updateLessonProgress(id, progress);
    education.updateBlockProgress(id);
  }, [education.history]);

  const handleProgress = (p) => {
    setProgress(p.played * 100);
  };

  const handleStart = () => {
    const fraction = education.lastHistory(0).progress / 100;
    ref.current.seekTo(fraction === true ? 0 : fraction);
  };

  return (
    <div className={cl.playerWrapper}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
        sx={{ position: "absolute", top: "25%" }}
      >
        <ErrorOutline sx={{ color: "white", fontSize: "128px" }} />
        <Typography variant="h2" color="white" align="center" px={2}>
          Выберите урок из списка, чтобы начать обучение.
        </Typography>
      </Box>

      <ReactPlayer
        ref={ref}
        onStart={handleStart}
        onProgress={(progress) => handleProgress(progress)}
        className={cl.reactPlayer}
        url={url}
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
});

export default React.memo(ResponsivePlayer);
