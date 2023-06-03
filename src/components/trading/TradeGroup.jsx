import {Box, InputAdornment, Slider, Stack, TextField, Typography} from "@mui/material";
import {grey, purple} from "@mui/material/colors";
import styled from "@emotion/styled";
import {CustomButton} from "../../ui/CustomButton";

const CustomSlider = styled(Slider)(({theme}) => ({
    "&.MuiSlider-colorPrimary": {
        color: grey[500],
        "& .MuiSlider-track": {
            color: purple[500],
        },
        "& .MuiSlider-thumb": {
            "&.Mui-active": {
                boxShadow: '0px 0px 0px 7px rgba(126, 87, 194, 0.2)',
            },
            "&:hover": {
                boxShadow: '0px 0px 0px 4px rgba(126, 87, 194, 0.2)',
            },
            "&.Mui-focusVisible": {
                boxShadow: '0px 0px 0px 7px rgba(126, 87, 194, 0.2)',
            },
            color: "#fff",
            outline: `1px solid ${grey[500]}`
        },
        "& .MuiSlider-valueLabelOpen": {
            "&:after": {
                content: '"%"',
                position: 'relative',
                top: 1,
                left: 1,
            }
        },
        "& .MuiSlider-mark": {
            backgroundColor: '#fff',
            opacity: 1,
            width: 4,
            height: 4,
            borderRadius: '100%',
            outline: `1px solid ${purple[500]}`
        },
        "& .MuiSlider-markLabel": {
            '&[data-index="1"]': {
                transform: 'translate(-75%,-50%)',
            },
            transform: 'translate(-50%,-50%)',
            color: `${grey[500]}`,
            fontSize: '12px',
        },
    }

}));
const CustomTextField = styled(TextField)(({theme}) => ({
    direction: 'rtl',
    "& .Mui-disabled": {
        "& .MuiOutlinedInput-input" : {
            "&::placeholder": {
                opacity: 0.75,
            },
        },
    },

    "& .MuiOutlinedInput-root": {
        height: 40,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: '8px'
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },


}))

export const TradeGroup = ({btnColor, type}) => {
    const marks = [
        {
            value: 0,
            label: '0'
        },
        {
            value: 25,
        },
        {
            value: 50,
        },
        {
            value: 75,
        },
        {
            value: 100,
            label: '100%'
        },
    ]
    return (
        <Box p={1} sx = {{outline: '1px solid blue'}}>
            <Stack spacing={1} >
                <CustomTextField
                    disabled = {type === 'market'}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Цена</InputAdornment>,
                    }}
                    type='number'
                    placeholder ={type === 'market' ? "Рыночная цена" : ' '}
                >
                </CustomTextField>
                <CustomTextField
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{type === 'market' ? "Всего" : "Сумма"}</InputAdornment>,
                    }}
                    type='number'
                >
                </CustomTextField>
            </Stack>
            <Box px={0.5}>
                <CustomSlider size='small' valueLabelDisplay="auto" marks={marks}/>
            </Box>
            <CustomTextField
                sx = {{display: type === 'limit' ? 'block' : 'none'}}
                InputProps={{
                    endAdornment: <InputAdornment position="end">Всего</InputAdornment>,
                }}
                type='number'
            >
            </CustomTextField>
            <Stack direction='row' spacing={1}>
                <Typography color={grey[500]}>Доступно</Typography>
                <Box display='flex' gap='3px'>
                    <Typography>1000</Typography>
                    <Typography>USD</Typography>
                </Box>
            </Stack>

            <CustomButton round variant='contained' color={btnColor} fullWidth sx={{mt: '8px', fontWeight: 600}}>
                Купить
            </CustomButton>
        </Box>
    )
}