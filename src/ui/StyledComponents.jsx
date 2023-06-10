import {Chip, TableCell, TableRow, ToggleButton} from "@mui/material";
import {grey} from "@mui/material/colors";
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