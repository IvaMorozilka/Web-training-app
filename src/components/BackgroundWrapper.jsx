import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const BackgroundWrapper = observer(({ children }) => {
  const { user } = useContext(Context);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: user.isAuth
          ? "#fff"
          : "radial-gradient(circle, #002c6a, #002458, #001b47, #011337, #000627)",
      }}
    >
      {children}
    </Box>
  );
});

export default BackgroundWrapper;