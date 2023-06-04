import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import {slotShouldForwardProp} from "@mui/material/styles/styled";

export const CustomTextField = styled(TextField, slotShouldForwardProp((prop) => prop !== 'height' && prop !== 'textAlign'))(({theme, height, textAlign}) => ({
    "& .Mui-disabled": {
        "& .MuiOutlinedInput-input": {
            "&::placeholder": {
                opacity: 0.75,
            },
        },
    },
    "& .MuiOutlinedInput-input": {
        textAlign: textAlign ? `${textAlign}` : "end",
    },
    "& .MuiOutlinedInput-root": {
        height: height ? `${height}` : 40,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },
}));