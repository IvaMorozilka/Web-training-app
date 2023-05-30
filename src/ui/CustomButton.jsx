import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "round" && prop !== "textColor",
})(({ theme, round, textColor }) => ({
  color: textColor ? `${textColor}` : "#fff",
  borderRadius: round ? "100px" : "8px",

  "&.MuiButton-outlined": {
    borderWidth: "2px",
    padding: "4px 15px",
  },
}));