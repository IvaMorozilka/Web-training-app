import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import {motion} from "framer-motion";

const Footer = observer((props) => {
  const { user } = useContext(Context);
  return user.isAuth ? (
    <>
      <Box
          id = '777'
        sx={{
          height: "60px",
          width: "100%",
            position: 'relative',
            left: 0,
            bottom: 0,
          background: "#7E57C2",
          // borderTopLeftRadius: "8px",
          // borderTopRightRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" color="#FFF" fontSize="1rem">
          Обучающая платформа VANILL' , 2023
        </Typography>
      </Box>
    </>
  ) : (
    <Box
      {...props}
        component={motion.div}
      className="footer-background"
      sx={{ width: "100%", height: "400px", marginTop: "auto" }}
    />
  );
});

export default Footer;
