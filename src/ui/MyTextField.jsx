import React from 'react';
import {TextField} from "@mui/material";
import styled from "@emotion/styled";


const CustomTextField = styled(TextField)(({theme}) => ({
    '& .MuiInputLabel-root': {
        color: '#b6b6b6'
    },
    '&.MuiTextField-root': {
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '3px',
                borderColor: theme.palette.primary.dark,
            },
        },
        '& .Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '3px',
                borderColor: theme.palette.primary.main,
            },
        },
    },
    '& .MuiOutlinedInput-input': {
        color: '#fff',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '8px',
        borderWidth: '2px',
        borderColor: theme.palette.primary.dark,
    },
}))

const MyTextField = (props) => {
    return (
        <CustomTextField
            {...props}
        >
            {props.children}
        </CustomTextField>
    );
};

export default MyTextField;