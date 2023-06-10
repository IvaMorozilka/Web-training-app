import styled from "@emotion/styled";
import {Button} from "@mui/material";

export const CustomButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "round" && prop !== "textColor" && prop !== "btnColor",
})(({theme, round, textColor, btnColor}) => ({
    color: textColor ? `${textColor}` : "#fff",
    borderRadius: round ? "100px" : "8px",
    paddingLeft: "25px",
    paddingRight: "25px",

    "&.MuiButton-outlined": {
        borderWidth: "2px",
        paddingBottom: '4px',
        paddingTop: '4px',
    },
    "&.MuiButton-contained": {
        boxShadow: 'none',
        "&.MuiButton-containedSecondary": {
            backgroundColor: theme.palette.secondary.light,
        },
        "&.MuiButton-containedPrimary": {
            backgroundColor: btnColor ? `${btnColor}` : theme.palette.primary.main,
            color: '#000',
        },
    },
}));