import {Chip, Slider, TableCell, TableRow, TextField, ToggleButton} from "@mui/material";
import {grey, purple} from "@mui/material/colors";
import styled from "@emotion/styled";

export const CustomChip = styled(Chip)(({theme}) => ({
    fontWeight: 500,
    border: '1px solid #fff',
    "&.MuiChip-outlined": {
        color: `${grey[500]}`,
    }
}))
export const CustomTableCell = styled(TableCell)(({theme}) => ({
    "&.MuiTableCell-root": {
        border: 'none',
        fontWeight: 500,
        fontSize: '13pt',
        paddingLeft: 0,
    },
}))
export const CustomTableRow = styled(TableRow)(({theme}) => ({
    "&.MuiTableRow-hover": {
        "&:hover": {
            backgroundColor: `${grey[100]}`
        },
    },
    "&.Mui-selected": {
        backgroundColor: `${grey[100]}`
    },
}))
export const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    "&.MuiToggleButton-standard": {
        color: "#929292",
        padding: 0,
        border: "none",
        textTransform: "none",

        "&:after": {
            content: '""',
            position: "absolute",
            width: "100%",
            border: "1px solid black",
            bottom: -1,
            left: 0,
            opacity: 0,
            transition: "opacity .1s ease-in-out",
        },

        "&.Mui-selected": {
            "&:after": {
                content: '""',
                position: "absolute",
                width: "100%",
                border: "1px solid black",
                bottom: -1,
                left: 0,
                opacity: 1,
            },

            background: "none",
            color: "#000",
        },
    },
}));

export const CustomSlider = styled(Slider)(({theme}) => ({
    "&.MuiSlider-colorPrimary": {
        marginTop: '-8px',
        marginBottom: '5px',
        color: grey[500],
        "& .MuiSlider-track": {
            color: purple[500],
        },
        "& .MuiSlider-thumb": {
            "&.Mui-active": {
                "&:hover": {boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)"},
                boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)",
            },
            "&:hover": {
                boxShadow: "0px 0px 0px 4px rgba(126, 87, 194, 0.2)",
            },
            "&.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)",
            },
            color: "#fff",
            outline: `1px solid ${grey[500]}`,
        },
        "& .MuiSlider-valueLabelOpen": {
            "&:after": {
                content: '"%"',
                position: "relative",
            },
        },
        "& .MuiSlider-mark": {
            "&.MuiSlider-markActive": {
                outline: `1px solid ${purple[500]}`,
            },
            backgroundColor: "#fff",
            opacity: 1,
            width: 4,
            height: 4,
            borderRadius: "100%",
            outline: `1px solid ${grey[500]}`,
        },
        "& .MuiSlider-markLabel": {
            '&[data-index="4"]': {
                transform: "translate(-75%,-50%)",
            },
            transform: "translate(-50%,-50%)",
            color: `${grey[500]}`,
            fontSize: "12px",
        },
    },
}));

export const CustomTextField = styled(TextField)(({theme}) => ({
    "& .Mui-disabled": {
        "& .MuiOutlinedInput-input": {
            "&::placeholder": {
                opacity: 0.75,
            },
        },
    },
    "& .MuiOutlinedInput-input": {
        textAlign: "end",
    },
    "& .MuiOutlinedInput-root": {
        height: 40,
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