import { Button } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  borderRadius: "8px",

  "&.MuiButton-outlinedPrimary": {
    borderWidth: "2px",
  },
}));

const MyButton = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default MyButton;